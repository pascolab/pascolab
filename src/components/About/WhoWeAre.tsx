import {whoWeAreContent} from "./aboutContent";

export default function WhoWeAre() {

    return (
        <section className="overflow-hidden relative bg-accent/30! dark:bg-accent">
            <div className="container">
                <div className="content-space">
                    <h2 className="text-foreground">
                        {whoWeAreContent.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {whoWeAreContent.paragraphs.map((item, index) => {
                            if (index === 0) {
                                const firstSpace = item.indexOf(" ");
                                const firstWord =
                                    firstSpace !== -1 ? item.substring(0, firstSpace) : item;
                                const rest =
                                    firstSpace !== -1 ? item.substring(firstSpace) : "";
                                return (
                                    <p key={item} className="text-muted-foreground max-w-5xl">
                                        <span className="font-bold text-body-large">{firstWord}</span>
                                        <span className="text-body">{rest}</span>
                                    </p>
                                );
                            }
                            return (
                                <p key={item} className="text-muted-foreground text-body max-w-5xl">
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