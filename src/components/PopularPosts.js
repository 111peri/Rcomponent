import { Component} from "react";
import BlogItem from "./BlogItem";

class PopularPosts extends Component {
    render() {
        const popularPostData = [
            {
               imageSrc: '/w3images/workshop.jpg',
                title: 'Lorem',
                description: 'Sed ',
            },
            {
                imageSrc: '/w3images/gondol.jpg',
                title: 'Ipsum',
                decription: 'Praes tinci sed',
            },
            {
                imageSrc: '/w3images/gondol.jpg',
                title: 'Ipsum',
                decription: 'Praes tinci sed',
            },
            {
                imageSrc: '/w3images/gondol.jpg',
                title: 'Ipsum',
                decription: 'Praes tinci sed',
            },
        ];

        return (
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>

                </div>
                <ul className="w3-ul w3-hoverble w3-white">
                    {postData.map((post, index) => (
                        <BlogItem
                        key={index}
                        imageSrc={post.imageSrc}
                        title={post.title}
                        description={post.description} />
                        )
                    )}

                </ul>
            </div>
        )
    }
}

export default PopularPosts