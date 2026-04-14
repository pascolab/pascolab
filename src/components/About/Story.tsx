import {aboutOurStoryContent} from "./aboutContent";

export default function Story() {

    return (
        <section className="overflow-hidden relative bg-accent/30! dark:bg-accent">
            <div className="container">
                <div className="content-space">
                    <p className="text-body-large text-primary font-semibold">
                        {aboutOurStoryContent.eyebrow}
                    </p>
                    <h2 className="max-w-4xl w-full">
                        {aboutOurStoryContent.title}
                    </h2>
                    <div className="content-space">
                    {aboutOurStoryContent.paragraphs.map(item => (
                        <p key={item} className="text-muted-foreground ">
                        {item}
                        </p>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )

}