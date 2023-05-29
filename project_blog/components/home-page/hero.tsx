import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				{/*width={1080} height={1920}*/}
				{/*width 와 height 는 실제 페이지에 표시되는 것과 비슷해야 한다. 그래야 next 가 최적화하기 좋다.
				작은데 크게 잡으면 불필요하게 크게 가지고 오는 것이고, 너무 작으면 해상도가 낮아져 품질에 문제가 있다.*/}
				<Image src="/images/site/seo_choco.jpg" alt="An image showing Seo" width={400} height={711} />
			</div>
			<h1>
				Hi, We are father and son
				<br />
				father is Seo, son is choco
			</h1>
			<p>I blog about web development - expecially frontend frameworks like React.</p>
		</section>
	);
};

export default Hero;
