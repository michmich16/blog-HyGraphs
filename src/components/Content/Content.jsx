import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MyBlogs } from "../../queries/MyBlogs";
import s from './Content.module.scss';


export const Content = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["MyBlogs"],
        queryFn: async () =>
            request(
                "https://eu-west-2.cdn.hygraph.com/content/cm1kcb8r2022r07w6x3yvhdk6/master",
                MyBlogs
            )
    })
    console.log(data);
    if (isLoading) {
        <p>Loading...</p>
    }

    if (error) {
        <p>Error: {error.mesage}</p>
    }


    return (
        <>
            <div className={s.contentStyle}>
                <section className={s.articleContainer}>
                    {data?.blogs.map((item) => {
                        console.log(item);
                        return (
                            <article className={s.articleStyle} key={item.id}>
                                <h3>{item.heading}</h3>
                                <span>
                                    <p>By {item.author}</p>
                                    <p className={s.releasedDate}>{item.releasedDate}</p>
                                </span>
                                <img src={item.image.url} alt="" />
                                <p>{item.article}</p>
                                <p>#{item.slug}</p>
                            </article>
                        )
                    })}

                </section>
            </div>
        </>
    )
}