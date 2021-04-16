import classes from './RenderCard.module.css';
import Card from '../Card/Card';

const RenderCard = (props) => {
        let render_content = [];
        const len = props.price.length;
        for (let i = 1; i <= len; i += 3) {
            let img = []; let show = [];
            for (let j = 0; j < 3; j++) {
                let idx = i + j;
                show.push(idx <= len);
                idx = Math.min(i + j, len);
                img.push(require('../../../../assets/Menu/' + props.folderName + '/' + idx + '.webp').default);
            }
            let div_content = (
                <div key={i} className={classes.content}>
                    <Card cart={props.cart} Image={img[0]} show={show[0]} price={props.price[i - 1]} heading={props.heading[i - 1]} cap={props.cap[i - 1]} />
                    <Card cart={props.cart} Image={img[1]} show={show[1]} price={props.price[i]} heading={props.heading[i]} cap={props.cap[i]} />
                    <Card cart={props.cart} Image={img[2]} show={show[2]} price={props.price[i + 1]} heading={props.heading[i + 1]} cap={props.cap[i + 1]} />
                </div>
            );
            render_content.push(div_content)
        }
        return (
            <div className={classes.RenderCard}>
                <p className={classes.heading}>{props.folderName}</p>
                <div style={{ marginTop: '0px', width: '70%' }}>
                    {render_content}
                </div>
            </div>
        )
  
}

export default RenderCard;