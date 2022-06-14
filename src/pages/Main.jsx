import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar.jsx';
import Feed from './components/Feed.jsx';

const MainDiv = styled.main`
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 20px;
    gap: 20px;
`;

const Intersector = styled.div`
	display:absolute;
	width:100%;
	height:20px;
	bottom:0px;
`;


function useIntersectionObserver(fetcher)
{
	const [itemLists, setItemLists] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const intersector = useRef();
	const count = useRef(1);

	useEffect(()=>console.log(itemLists), [itemLists]);

	const getMoreItem = async ()=>{
		setIsLoaded(true);
		const newItems = await fetcher(count.current);
		count.current++;
		setItemLists(itemLists=>itemLists.concat(newItems));
		setIsLoaded(false);
	};

	const onIntersect = async([entry], observer)=> {
		if (entry.isIntersecting && !isLoaded) {
			observer.unobserve(entry.target);
			try{
				await getMoreItem();
				observer.observe(entry.target);
			}
			catch{
				console.log('end of files!');
			}
		}
	};

	useEffect(()=>{
		let observer;
		if (intersector.current) {
			observer = new IntersectionObserver(onIntersect, {
				rootMargin: '0px 0px 50px 0px',
				threshold: 0.5
			});
			observer.observe(intersector.current);
		}
		return ()=>observer && observer.disconnect();
	}, [intersector]);

	return [itemLists, intersector];
}

function Main()
{
	const loadMore = (i)=>{
		return fetch(`/data/feeds${i}.json`)
			.then(response=>response.json());
	}

	let [feeds, intersector] = useIntersectionObserver(loadMore);

	return <>
		<NavBar />
		<MainDiv>
			{feeds.map( ({who, upload_date, img, content}, i)=>{
				return <Feed key={`${who}_${upload_date}_${i}`} 
					name={who}
					date={upload_date}
					image={img}
					content={content}
				/>
			} )}
			<Intersector ref={intersector} />
		</MainDiv>
	</>;
}

export default Main;