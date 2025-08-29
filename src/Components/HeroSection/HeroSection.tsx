import { Play, Star, Users, Award } from "lucide-react";
import heroImage from "../../assets/hero-learning.jpg";

export const HeroSection = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-white bg-opacity-5 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]"></div>
            </div>

            <div className="container relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ml-[160px]">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    <div className="text-center lg:text-left">

                        <span className="inline-block mb-4 rounded-full bg-white/20 text-white border border-white/30 px-3 py-1 text-sm font-medium">
                            🚀 Join 100,000+ learners worldwide
                        </span>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Learn Skills for the{" "}
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Future
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-white/90 max-w-2xl">
                            Master in-demand skills with expert-led courses. Build projects,
                            earn certificates, and advance your career with our comprehensive
                            learning platform.
                        </p>


                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-indigo-600 px-6 py-3 text-lg font-semibold shadow-lg hover:bg-white/90 transition"
                            >
                                <Play className="h-5 w-5" />
                                Start Learning Free
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 text-white px-6 py-3 text-lg font-semibold hover:bg-white/10 transition"
                            >
                                Browse Courses
                            </a>
                        </div>


                        <div className="mt-12 grid grid-cols-3 gap-4 text-center lg:text-left">
                            <div>
                                <div className="flex items-center justify-center lg:justify-start text-white/90 mb-1">
                                    <Users className="h-4 w-4 mr-1" />
                                    <span className="text-sm">Students</span>
                                </div>
                                <div className="text-2xl font-bold text-white">100K+</div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center lg:justify-start text-white/90 mb-1">
                                    <Star className="h-4 w-4 mr-1" />
                                    <span className="text-sm">Rating</span>
                                </div>
                                <div className="text-2xl font-bold text-white">4.9/5</div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center lg:justify-start text-white/90 mb-1">
                                    <Award className="h-4 w-4 mr-1" />
                                    <span className="text-sm">Courses</span>
                                </div>
                                <div className="text-2xl font-bold text-white">500+</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={heroImage}
                                alt="Students learning together"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg animate-pulse">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <Award className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">Certificate</div>
                                    <div className="text-xs text-gray-500">Completed</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg animate-bounce">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                                    <Play className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">Live Session</div>
                                    <div className="text-xs text-gray-500">Starting now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
