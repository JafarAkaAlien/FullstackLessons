import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div class="p-6">
            <div class="lg:max-w-7xl max-w-xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="aspect-308/213">
                        <img src="https://us.tonies.com/cdn/shop/files/Kermit-11000541-PLPTB2MainImageTransparent.png?v=1771258666&width=1500" alt="Image" class="object-cover w-full h-full" />
                    </div>
                    <div>
                        <h2 class="text-4xl font-bold text-purple-700 mb-6">Immerse Yourself in Creativity</h2>
                        <p class="text-slate-600 text-[15px] leading-6">
                            Immerse yourself in creativity and unlock the power of imagination. Whether you're designing, writing, building, or exploring new ideas, this is your space to let inspiration flow freely. Break boundaries, experiment boldly, and turn your vision into reality—one creative spark at a time.
                        </p>
                        <ul class="list-disc text-[15px] text-slate-600 space-y-2 pl-4 mt-6">
                            <li>Discover innovative ideas.</li>
                            <li>Create unique projects.</li>
                            <li>Collaborate with like-minded individuals.</li>
                            <li>Transform your visions into reality.</li>
                        </ul>
                        <div class="mt-6">
                            <Link to={"/"}
                            className="cursor-pointer px-4 py-2 bg-purple-700 rounded-full text-white text-sm font-semibold">Get Start</Link>
                            {/* <button type="button" class="cursor-pointer px-4 py-2 bg-purple-700 rounded-full text-white text-sm font-semibold">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About