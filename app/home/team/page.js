import TeamCard from '@/components/teamCard';
import React from 'react'
import { teamData } from '@/database/db';

export const Team = () => {
    return (
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="mx-auto mb-5 lg:max-w-xl sm:text-center flex justify-center items-center">
                <p className="inline-block px-3 py-px mb-4 text-xl lg:text-2xl font-semibold tracking-wider text-purple-600 uppercase rounded-full bg-teal-accent-400">
                    Discover Our Team
                </p>

            </div>
            <div className="gap-10 mx-auto flex justify-center md:flex-nowrap flex-wrap items-center">
                {
                    teamData.map((team, index) => (

                        <TeamCard key={index} name={team.name} post={team.post} img={team.img} />
                    ))
                }
            </div>
        </div>
    );
};

export default Team