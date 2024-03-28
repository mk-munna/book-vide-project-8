import React from 'react';
import { IoBookOutline } from "react-icons/io5";

const FamousAuthor = () => {
    return (
        <div className='mt-24 mb-20 font-workSans'>
            <h1 className='font-bold text-2xl lg:text-5xl text-center font-workSans'>THE FAMOUS AUTHORS & PUBLISHERS</h1>
            <p className='lg:w-[1000px] text-center mt-6 mx-auto'>Journey through the corridors of literary history, encountering iconic writers and influential publishing entities whose contributions have shaped the literary world. Immerse yourself in a tapestry of creativity, innovation, and enduring literary legacies. Unveil the masterful works of iconic writers and the visionary contributions of esteemed publishers. Engage with the rich tapestry of storytelling that has captivated minds and  shaping the literary landscape.</p>
            <div className='flex flex-col lg:flex-row mt-20'>
                <img src="https://i.ibb.co/RgCSgrq/team-1.png" alt="" />
                <img src="https://i.ibb.co/Ph2srmP/team-2.png" alt="" />
                <img src="https://i.ibb.co/mDkq0p4/team-3.png" alt="" />
                <img src="https://i.ibb.co/W5pYjT2/team-4.png" alt="" />
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='bg-base-200 flex gap-4 px-6 py-16'>
                    <div>
                        <IoBookOutline className='text-7xl' />
                    </div>
                    <div>
                        <h2 className='uppercase text-lg font-semibold mb-2'>The Night Circus</h2>
                        <p>
                            The Night Circus" is a captivating novel by Erin Morgenstern, weaving a tale of enchantment and mystery surrounding a magical competition between two young illusionists.
                        </p>
                    </div>
                </div>
                <div className='bg-[#90a18f] text-white flex gap-4 px-6 py-16'>
                    <div>
                        <IoBookOutline className='text-7xl' />
                    </div>
                    <div>
                        <h2 className='uppercase text-lg font-semibold mb-2'>The Hunger Games</h2>
                        <p>
                            "The Hunger Games" is a dystopian novel series by Suzanne Collins, set in a post-apocalyptic world where teenagers are forced to participate in a televised fight to the death.
                        </p>
                    </div>
                </div>
                <div className='bg-base-200 flex gap-4 px-6 py-16'>
                    <div>
                        <IoBookOutline className='text-7xl' />
                    </div>
                    <div>
                        <h2 className='uppercase text-lg font-semibold mb-2'>The Alchemist</h2>
                        <p>
                            "The Alchemist" is a bestselling novel by Paulo Coelho, following Santiago, a young Andalusian shepherd, on a journey of self-discovery and spiritual awakening.
                        </p>
                    </div>
                </div>
            </div>


            <section className='mt-20 flex flex-col lg:flex-row gap-6 lg:gap-24'>
                <div className='lg:w-1/2 text-center lg:text-left mt-12'>
                    <h1 className='text-[40px] font-bold'>A WORD FROM THE AUTHOR</h1>
                    <p className='text-sm text-center'>What our expert says about this book.</p>
                    <p className='mt-6 text-[8px] text-[#979797] text-center'>____mk____</p>

                    <div className='mt-8 lg:w-[600px] bg-base-200 border-l-8 border-[#2fc29d] p-10'>
                        <p className='italic text-base lg:text-lg text-[#747474] font-workSans'>Be the change you wish to see in the world." This profound quote by Mahatma Gandhi reminds us of our power to enact meaningful change through our actions and choices. It serves as a timeless call to action, inspiring individuals to strive for a better world through personal example and initiative.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/pWvsWy3/image.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default FamousAuthor;