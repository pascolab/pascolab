import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"



const Models = () => {
    const t300 = "transition-colors duration-500! ease-in-out"
    const t500 = "transition-colors duration-500! ease-in-out"
    return (
        <section className='bg-white overflow-hidden'>
            <div className='container mx-auto'>
               <div className="flex flex-col md:flex-row md:items-stretch gap-5">
                {/* left side  */}
                <div className="w-full md:w-4/12  md:min-h-64 mb-5 md:mb-0 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-medium text-midnight_text"> 
                Our Engagement <br />
                 <span className="text-black font-bold text-5xl md:text-[6rem] tracking-wide mt-2 md:mt-4 inline-block ">Models</span>   
                </h2>

                </div>
                {/* right side  */}
                <div className="w-full flex-1 flex flex-col md:flex-row gap-5  *:w-full *:h-62 md:*:h-62">
                    {/* dedicated hiring  */}
                    <div className={`w-full h-full relative bg-teal-500 hover:bg-gray-100/50 ${t500} rounded-lg group overflow-hidden flex items-center justify-center px-4 md:px-6 gap-4`}>
                            <div className="w-full relative flex flex-col sm:flex-row items-center sm:items-start justify-start text-center sm:text-left ">
                            <div className={`h-17 w-17 shrink-0 md:h-20 md:w-20 p-3 bg-white group-hover:bg-primary ${t300} rounded-md flex items-center justify-center sm:mt-0`}>
                            <Icon icon="solar:user-check-rounded-outline" className={`text-midnight_text group-hover:text-white ${t300} h-full w-full`}/>
                            </div>
                            <div className="px-4 flex flex-col gap-1.5 md:gap-5 w-full pt-6 sm:pt-0">
                                <h3 className={`text-2xl md:text-3xl font-medium text-white group-hover:text-midnight_text ${t500}`}>Dedicated Hiring</h3>
                                <p className={`text-sm md:text-base text-white group-hover:text-midnight_text ${t500} max-sm:line-clamp-1`}>We provide dedicated hiring services to our clients.</p>
                            </div>
                            </div>
                            <Link
                              href="#"
                              className="absolute inset-x-4 md:inset-x-6 bottom-4 z-10 flex items-center justify-center sm:justify-start gap-2 opacity-100 translate-y-0 pointer-events-auto transition-all duration-300 ease-in-out sm:opacity-0 sm:translate-y-4 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-hover:pointer-events-auto "
                            >
                            <span className={`text-white text-base group-hover:text-primary ${t500}`}>View Details</span>
                            <Icon icon="solar:arrow-right-outline" className={`text-white h-5 w-5 group-hover:text-primary ${t500}`}/>
                            </Link>
                    </div>
                    {/* fixed price  */}
                    <div className={`w-full h-full relative bg-black/90 hover:bg-gray-100/50 ${t500} rounded-lg group overflow-hidden flex items-center justify-center px-4 md:px-6 gap-4`}>
                            <div className="w-full relative flex flex-col sm:flex-row items-center sm:items-start justify-start text-center sm:text-left ">
                            <div className={`h-17 w-17 shrink-0 md:h-20 md:w-20 p-3 bg-white group-hover:bg-primary ${t300} rounded-md flex items-center justify-center sm:mt-0`}>
                            <Icon icon="solar:dollar-outline" className={`text-midnight_text group-hover:text-white ${t300} h-full w-full`}/>
                            </div>
                            <div className="px-4 flex flex-col gap-1.5 md:gap-5 w-full pt-6 sm:pt-0">
                                <h3 className={`text-2xl md:text-3xl font-medium text-white group-hover:text-midnight_text ${t500}`}>Fixed Price</h3>
                                <p className={`text-sm md:text-base text-white group-hover:text-midnight_text ${t500} max-sm:line-clamp-1`}>Get access to best-in-class software engineering talent for your project at a single, fixed price.</p>
                            </div>
                            </div>
                            <Link
                              href="#"
                              className="absolute inset-x-4 md:inset-x-6 bottom-4 z-10 flex items-center justify-center sm:justify-start gap-2 opacity-100 translate-y-0 pointer-events-auto transition-all duration-300 ease-in-out sm:opacity-0 sm:translate-y-4 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-hover:pointer-events-auto"
                            >
                            <span className={`text-white text-base group-hover:text-primary ${t500}`}>Hire Resources</span>
                            <Icon icon="solar:arrow-right-outline" className={`text-white h-5 w-5 group-hover:text-primary ${t500}`}/>
                            </Link>
                    </div>    
                </div>
               </div>
            </div>
        </section>
    )
}

export default Models