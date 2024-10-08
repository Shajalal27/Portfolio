
import Photo from '../../component/Photo';
import Text from '../../component/Text';

const Banner = () => {

    return (
        <section className='max-w-5xl mx-auto min-h-screen border-2 border-red-300] bg-green-200 rounded-md'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 justify-center items-center'>
                    <div className=' '>
                        <Photo/>
                    </div> 
                    <div className='pl-10'>
                        <Text/>
                    </div>    
                </div>
           
        </section>
    );
};

export default Banner;