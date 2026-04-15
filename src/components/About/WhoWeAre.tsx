import {whoWeAreContent} from "./aboutContent";

export default function WhoWeAre() {

    return (
        <section className="overflow-hidden relative bg-accent/30! dark:bg-accent">
            <div className="container">
                <div className="content-space">
                    <h2>
                        {whoWeAreContent.title}
                    </h2>
                    <div className="content-space">
                        {whoWeAreContent.paragraphs.map((item, index) => {
                            if (index === 0) {
                                const firstSpace = item.indexOf(" ");
                                const firstWord =
                                    firstSpace !== -1 ? item.substring(0, firstSpace) : item;
                                const rest =
                                    firstSpace !== -1 ? item.substring(firstSpace) : "";
                                return (
                                    <p key={item} className="text-muted-foreground">
                                        <span className="font-bold text-body-large">{firstWord}</span>
                                        {rest}
                                    </p>
                                );
                            }
                            return (
                                <p key={item} className="text-muted-foreground">
                                    {item}
                                </p>
                            );
                        })}
            
                    </div>
                </div>
            </div>
        </section>
    )

}