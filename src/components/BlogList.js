import React, { Component } from 'react';
import BlogEntry from './BlogEntry';

class BlogList extends Component {
    render() {
        const blogData = [
            {
                title: 'ЗАГОЛОВОК',
                date: '7 апреля 2014 года',
                content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl...'
            },
            {
                title: 'ЗАПИСЬ В БЛОГЕ',
                date: '2 апреля 2014 года',
                content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl...'
            },
            {
                title: 'Меня зовут',
                content: 'Просто я, моя личность и я, исследующие вселенную неизвестности. У меня есть сердце, полное любви, и интерес к lorem ipsum и блогу mauris neque quam. Я хочу поделиться своим миром с вами.'
            },
            {
                title: 'Популярные посты',

            },

        ];

        return (
            <div className="w3-col l8 s12">
                {blogData.map((entry, index) => (
                    <BlogEntry
                        key={index}
                        title={entry.title}
                        date={entry.date}
                        content={entry.content}
                    />


                ))}
            </div>
        );
    }
}



export default BlogList
