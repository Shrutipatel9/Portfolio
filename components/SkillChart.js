
import React from "react";

const SkillChart = () => {
    const [tooltip, setTooltip] = React.useState({ show: false, x: 0, y: 0, title: "", score: "" });

    const handleMouseEnter = (e, title, score, cx, cy) => {
        // Calculate position relative to the container
        // Since SVG is responsive, we might need a simpler approach or fixed overlay
        // For simplicity in SVG relative coordinates:
        setTooltip({ show: true, x: cx, y: cy, title, score });
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, show: false });
    };

    const points = [
        { cx: 50, cy: 2.5, title: "React.js & Vue.js", score: "95" },
        { cx: 97.55, cy: 34.55, title: "JavaScript", score: "100" },
        { cx: 73.5, cy: 82.4, title: "Node.js & Backend", score: "80" },
        { cx: 26.5, cy: 82.4, title: "DB Management", score: "80" },
        { cx: 26.2, cy: 42.3, title: "Python (Learning)", score: "50" },
    ];

    return (
        <div className="relative flex justify-center items-center w-full h-full min-h-[300px]">
            <div className="relative w-[250px] h-[250px] xl:w-[350px] xl:h-[350px]">
                {/* Background Polygons */}
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full overflow-visible opacity-50"
                >
                    {/* Pentagon Grid */}
                    {[20, 40, 60, 80, 100].map((r, i) => (
                        <polygon
                            key={i}
                            points="50,0 97.55,34.55 79.39,90.45 20.61,90.45 2.45,34.55"
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="0.5"
                            strokeOpacity="0.2"
                            transform={`scale(${r / 100})`}
                            style={{ transformOrigin: "50% 50%" }}
                        />
                    ))}

                    {/* Axis Lines */}
                    <line x1="50" y1="50" x2="50" y2="0" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.2" />
                    <line x1="50" y1="50" x2="97.55" y2="34.55" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.2" />
                    <line x1="50" y1="50" x2="79.39" y2="90.45" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.2" />
                    <line x1="50" y1="50" x2="20.61" y2="90.45" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.2" />
                    <line x1="50" y1="50" x2="2.45" y2="34.55" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.2" />

                    {/* Data Polygon */}
                    <polygon
                        points="50,2.5 97.55,34.55 73.5,82.4 26.5,82.4 26.2,42.3"
                        fill="rgba(241, 48, 36, 0.2)"
                        stroke="#F13024"
                        strokeWidth="2"
                        className="drop-shadow-[0_0_10px_rgba(241,48,36,0.5)]"
                    />

                    {/* Points with Interaction */}
                    {points.map((p, i) => (
                        <g key={i}
                            onMouseEnter={(e) => handleMouseEnter(e, p.title, p.score, p.cx, p.cy)}
                            onMouseLeave={handleMouseLeave}
                            className="cursor-pointer hover:scale-150 transition-transform duration-200"
                            style={{ transformBox: "fill-box", transformOrigin: "center" }}
                        >
                            <circle cx={p.cx} cy={p.cy} r="2" fill="#fff" stroke="#F13024" strokeWidth="1" />
                            <circle cx={p.cx} cy={p.cy} r="6" fill="transparent" /> {/* Hit area */}
                        </g>
                    ))}
                </svg>

                {/* Tooltip Overlay */}
                {tooltip.show && (
                    <div
                        className="absolute z-50 bg-[#1e293b] text-white p-3 rounded-xl border border-white/10 shadow-xl pointer-events-none transition-all duration-200"
                        style={{
                            left: `${tooltip.x}%`,
                            top: `${tooltip.y}%`,
                            transform: 'translate(10px, 10px)',
                            minWidth: '150px'
                        }}
                    >
                        <div className="font-bold text-sm mb-1">{tooltip.title}</div>
                        <div className="text-xs text-accent font-semibold">Proficiency : <span className="text-white">{tooltip.score}%</span></div>
                    </div>
                )}


                {/* Labels */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-xs text-white whitespace-nowrap">
                    React.js & Vue.js
                </div>
                <div className="absolute top-[35%] right-0 translate-x-8 text-xs text-white whitespace-nowrap">
                    JavaScript
                </div>
                <div className="absolute bottom-[10%] right-0 translate-x-4 text-xs text-white whitespace-nowrap">
                    Node.js & Backend
                </div>
                <div className="absolute bottom-[10%] left-0 -translate-x-4 text-xs text-white whitespace-nowrap">
                    DB Management
                </div>
                <div className="absolute top-[35%] left-0 -translate-x-12 text-xs text-white whitespace-nowrap">
                    Python (Learning)
                </div>
            </div>
        </div>
    );
};

export default SkillChart;
