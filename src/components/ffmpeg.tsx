import { FFmpeg } from '@ffmpeg/ffmpeg';
//import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { useRef, useState } from 'react';

export default function FFmpegUtil() {
    const [loading, setLoading] = useState(false);
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);

    async function load() {
        const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
        const ffmpeg = ffmpegRef.current;
        ffmpeg.on("log", ({ message }) => {
            console.log(message);
        });

        await ffmpeg.load({
            coreURL: `${baseURL}/ffmpeg-core.js`,
            wasmURL: `${baseURL}/ffmpeg-core.wasm`,
        });
        setLoading(true);
    }

    return (
        <span>{loading}</span>
    )
}