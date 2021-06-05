import {usePopperTooltip} from "react-popper-tooltip";
import {Item} from "../types";
import Card from "./Card";

type CardProps = {
    item?: any,
};

export default function Tooltip({
                                item
                             }: CardProps) {
    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible,
    } = usePopperTooltip();

    return (
        <>
            <img key={item.id} src={item.image} alt={item.name} className="w-10 pixelated inline"
                 ref={setTriggerRef} />
            {visible && <>
                <div
                    ref={setTooltipRef}
                    {...getTooltipProps({ className: 'tooltip-container' })}
                >
                    <Card image={item.image} name={item.name} description={item.description}/>
                    <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                    </div>
                </>
            }
                </>
    );
}
