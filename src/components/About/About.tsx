import css from './About.module.scss';

export const About = () => {
    return (
        <div className={css['about']}>

            <div>I'm a Software Engineer interested in design systems, web3, user/dev experience and ethical practices.</div>
            <div>I work at Lunchbox Inc. as a Software Engineer for the Innovation Team.</div>
            <div>Currently residing in Austin, TX.</div>
            <div>
                You can find me on <a href="https://github.com/jonathantcrawford">github</a>, <a href="https://twitter.com/jon_t_craw">twitter</a>, <a href="https://www.linkedin.com/in/jonathantcrawford/">linkedin</a> and <a href="https://medium.com/@jonathantcrawford">medium</a>.
            </div>
        </div>
    )
}