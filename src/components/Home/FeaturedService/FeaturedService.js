import React from 'react';
import featuredImg from "../../../images/Mask Group 3.png"

const FeaturedService = () => {
    return (
        <section className="my-5 m-5">
            <div className="container ">
                <div className="row">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featuredImg} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h1 className="mb-5">Exceptional Dental Care,<br/> on your Terms</h1>
                        <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi amet, veritatis reprehenderit ex quisquam laborum maiores, ea non laboriosam sequi mollitia nulla placeat at blanditiis rerum error tenetur, nobis voluptatem sapiente quidem id molestias quibusdam voluptatibus? Asperiores earum et quidem veritatis qui quasi maxime hic molestiae iure provident aperiam aspernatur veniam iusto saepe, exercitationem quos tempora inventore numquam ducimus perspiciatis id dolorem odit. Assumenda repellendus hic doloribus minus officia officiis tempora earum! Numquam est reprehenderit blanditiis dolorum, commodi nihil, optio porro fuga doloremque soluta nam animi delectus! Iusto obcaecati repellat nihil quas laborum blanditiis dolore deserunt quidem incidunt delectus, consequuntur labore! Soluta quidem quas similique non temporibus tenetur delectus provident repudiandae? Officiis vero facere aspernatur nesciunt omnis quam cumque illum illo, perferendis, nihil ab odit quibusdam deserunt aut rerum praesentium, dolor non quia quidem in!</p>
                        <button style={{background: 'rgb(19, 190, 190)', color: 'white'}} className="btn pl-5 pr-5">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;