import Component from 'react'


class BlogItem extends  Component {
    render() {
        const {imageSrc, title, description } = this.props;

        return (
            <li className="w3-padding-16">
                <img src={imageSrc} alt="Image" className="w3-left w3-margin-right" style={{ width: '50px'}}/>
                <span className="">{title}</span><br/>
                <span>{description}</span>

            </li>
        );
    }
}

export default BlogItem