
const AboutUs = () => {
    return (
        <div className="flex flex-col justify-between md:flex-row md:space-x-7 px-4 md:px-10 py-4 md:py-14">
            <div>
                <img className=" rounded-md" src={require('../images/analise.jpg')} alt='' />
                <span className="text-xl font-semibold">we analise your requirments</span>
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni at laudantium vel voluptatum quibusdam voluptas libero deleniti, molestiae debitis maiores culpa sit sequi veritatis beatae corporis alias ea dolores expedita doloremque aliquid totam quia! Doloribus nisi id facere fuga quidem? In corporis minima accusamus quo, doloremque quas assumenda quisquam. Rem.</p>
            </div>
            <div>
                <img className=" rounded-md" src={require('../images/structure.jpg')} alt='' />
                <span className="text-xl font-semibold ">We make a structure</span>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum non suscipit, eum optio nisi omnis velit autem, dolorem placeat eligendi consequatur necessitatibus saepe quisquam et sequi atque reiciendis voluptatem fugiat ratione, consequuntur iusto labore. Soluta est at minima ullam nostrum eaque tempore nihil, cumque repudiandae facere, ipsum provident eos! Incidunt!</p>
            </div>
            <div>
                <img className=" rounded-md" src={require('../images/creation.jpg')} alt='' />
                <span className="text-xl font-semibold ">We create software with best tech</span>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perspiciatis nemo quae reprehenderit voluptates reiciendis similique, quas nam animi quod numquam facere nesciunt sed ex voluptate voluptas, ipsum, praesentium at obcaecati eligendi dolores incidunt! Necessitatibus amet asperiores delectus ad inventore quasi molestiae saepe at alias labore repellendus aliquam, iste excepturi.</p>
            </div>
        </div>
    )
}

export default AboutUs