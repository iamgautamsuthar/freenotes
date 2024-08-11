import TeamCard from '@/components/teamCard';
import React from 'react'

export const Team = () => {

    const teamInfo = [{
        name: "Gautam Suthar",
        post: "Founder / Developer",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
    }, {
        name: "Ishika Patel",
        post: "Founder / Material Provider",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
    },]

    return (
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="mx-auto mb-5 lg:max-w-xl sm:text-center flex justify-center items-center">
                <p className="inline-block px-3 py-px mb-4 text-xl lg:text-2xl font-semibold tracking-wider text-purple-600 uppercase rounded-full bg-teal-accent-400">
                    Discover Our Team
                </p>

            </div>
            <div className="gap-10 mx-auto flex justify-center md:flex-nowrap flex-wrap items-center">
                {
                    teamInfo.map((team, index) => (

                        <TeamCard name={team.name} post={team.post} image={team.image} />
                    ))
                }
            </div>
        </div>
    );
};

export default Team