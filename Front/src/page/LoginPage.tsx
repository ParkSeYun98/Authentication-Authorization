import { testApi } from '../api/Test';
import React, {useState} from 'react'

const LoginPage = () => {
    
    const [apiResponse, setApiResponse] = useState('');

    const doTest = async () => {
        await testApi(({data}) => {
          const result = data as string;
          setApiResponse(result);
        }, 
        (error) => {});
    }

    React.useEffect(() => {
        doTest();
    }, []);
    

    return (
        <>
            <div
                style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }} 
                className="absolute inset-0 bg-black opacity-50 z-0">
            </div>

            <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-0" style={{ backgroundImage: `url('${import.meta.env.VITE_S3_URL}Introduce/bgggg.png')`, cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }}>
                <div className="api-response">
                    {apiResponse}
                </div>
                
                <div className="text-center z-0">
                    <div>
                    <h1 className="text-6xl font-bold text-[#fff] font-['passero-one']">Explore New Language with</h1>
                    <h2 className="text-7xl mt-2 font-extrabold text-[#FFE58A] font-['passero-one']">LingoTown!</h2>
                    </div>
                </div>
                <div className="z-0 mt-7">
                    <img 
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    className="h-10 rounded" 
                    src={ import.meta.env.VITE_S3_URL + "Button/KakaoButton.png" } onClick={() => {  }}/>
                    <img 
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    className="h-10 rounded mt-2" 
                    src={ import.meta.env.VITE_S3_URL + "Button/GoogleButton.png" } onClick={() => {  }}/>
                    <img 
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    className="h-10 rounded mt-2 bg-[#ddd]" 
                    src={ import.meta.env.VITE_S3_URL + "Button/ExploreNowButton.png"} onClick={() => {  }}/>
                </div>
            </div>

        </>
    )
}

export default LoginPage;