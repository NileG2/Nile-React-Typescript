import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import ProgressBar from "../../helpers/ProgressBar";
import ProductCarousal from "../productCarousal/ProductCarousal";
import SelectOptions from "../../helpers/SelectOptions";
import axios from "axios";
import { toast } from "react-toastify";

const ProductCardDetails = (props: any) => {
    const [ratingStarKeys, setRatingStartKeys] = useState<any>(
        Object.keys(props.product.rating.stars).reverse()
    );
    const [reviewComment, setReviewComment] = useState("");
    const [stars, setStars] = React.useState<any>(0);
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const [averageRating, setAverageRating] = useState(0);
    const [totalRating, setTotalRating] = useState(0);
    const [totalReview, setTotalReview] = useState(0);
    const [reviews, setReviews] = useState<any>([]);
    const handleReviewSubmit = () => {
        if (stars < 1 && reviewComment === "") {
            toast.error("Please fill review comment and select a rating");
            return;
        }
        console.log(props.product);
        const url = `http://localhost:9000/api/rating/${props.product.rating_id}`;

        const body = {
            new_review: {
                stars: stars,
                review: reviewComment,
                username: auth["username"],
                date: new Date().toDateString(),
            },
            userid: auth["userid"],
        };
        console.log("body", body);
        // 2dc8a872-09fa-4e33-82e1-f87eff4d2087
        axios
            .post(url, body)
            .then((res) => {
                toast.success("Review posted successfully");
                console.log(res.data);
                setStars(0);
                setReviewComment("");
            })
            .catch((err) => {
                toast.error("Something went wrong");
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:9000/api/rating/${props.product.rating_id}`)
            .then((res) => {
                console.log(res.data);
                setAverageRating(res.data.rating_data.aggregate.avg_rating);
                setTotalRating(res.data.rating_data.aggregate.total_rating_count);
                setReviews(res.data.rating_data.reviews);
                setTotalReview(res.data.rating_data.aggregate.total_review_count);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong while fetching product data rating");
            });
    }, []);
    return (
        <div className="Card">
            <div className="std-card std-no-shadow p-0">
                <div className="row p-3">
                    <div className="col-5">
                        <ProductCarousal slides={props.product.slides} />
                        <br />
                        <div
                            className="p-2"
                            style={{ border: "solid 1px gray", borderRadius: "12px" }}
                        >
                            {props.product.options.map((option: any, index: number) => {
                                return <SelectOptions option={option} key={index} />;
                            })}
                        </div>
                    </div>
                    <div className="col-7">
                        <p className="m-0 std-boldFont std-font3 overflow-hidden">
                            {props.product.product_name}
                        </p>
                        <div className="std-section"></div>
                        <div className="row">
                            <div className="col">
                                <p className="std-bold std-greenText std-font1 m-0">In Stock</p>
                                <p className="std-font1 m-0">Sold By {props.product.brand}</p>
                                <Rating name="read-only" value={averageRating} precision={0.5} readOnly />
                            </div>
                            <div className="col">
                                <div className="row">
                                    <p
                                        className="col-9 m-0 p-0 std-boldFont std-font2"
                                        style={{ textAlign: "end" }}
                                    >
                                        {props.product.price}
                                    </p>
                                    <p className="col-3 m-0 std-desc std-fontSmall">INR</p>
                                </div>
                            </div>
                        </div>
                        <div className="std-section"></div>
                        <div>
                            <p className="std-font2 std-boldFont">About this product</p>
                            <ul>
                                {props.product.details.map((detail: any, index: number) => {
                                    return (
                                        <li key={index}>
                                            <p className="std-bold std-font1 m-0">{detail}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="std-section"></div>
                        <div>
                            <p className="std-font2 std-boldFont">Technical Details</p>
                            <ul className="list-group">
                                {props.product.technicalDetails.map(
                                    (elem: any, index: number) => {
                                        return (
                                            <li className="list-group-item" key={index}>
                                                <div className="row">
                                                    <div className="col std-boldFont">{elem.key}</div>
                                                    <div className="col">{elem.value}</div>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <br />
                        </div>
                        <div className="std-section"></div>
                        <div>
                            <p className="std-font2 std-boldFont">Rating</p>
                            <div>
                                <Rating
                                    name="read-only"
                                    value={averageRating}
                                    precision={0.5}
                                    readOnly
                                />
                                <p>
                  Average Customer Rating based is on a total of &nbsp;
                                    {totalRating} ratings
                                </p>
                            </div>
                            <ul className="std-ul">
                                {ratingStarKeys.map((key: any, index: number) => {
                                    return (
                                        <li className="d-flex" key={index}>
                                            <p className="std-font1 p-2">{key} Star</p>
                                            <ProgressBar
                                                bgcolor="#444"
                                                progress={
                                                    props.product.rating.stars[ratingStarKeys[index]] *
                          100
                                                }
                                                height="10px"
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="reviewForm" style={{ margin: "2rem 0" }}>
                            <h2 className="std-subHeader">Provide a review</h2>
                            <div className="rowInput">
                                {/* <div className="label">Provide a review:</div> */}
                                <input
                                    className="std-inputField"
                                    value={reviewComment}
                                    style={{ width: "100%" }}
                                    placeholder="Your comment..."
                                    onChange={(e) => setReviewComment(e.target.value)}
                                />
                            </div>
                            <div className="rowInput" style={{ margin: "1rem 0" }}>
                                <div className="label">Provide a rating:</div>
                                <Rating
                                    name="simple-controlled"
                                    value={stars}
                                    onChange={(event, newValue) => {
                                        setStars(newValue);
                                    }}
                                />
                            </div>
                            <button
                                className="std-btn std-btnOrange"
                                onClick={handleReviewSubmit}
                            >
                Submit review
                            </button>
                        </div>
                        <div className="std-section"></div>
                        <div>
                            <p className="std-font2 std-boldFont">Reviews</p>
                            <p>Total reviews {totalReview}</p>
                            <ul className="std-ul">
                                {reviews.length > 0 &&
                  reviews.map((review: any, index: number) => {
                      return (
                          <li className="std-card m-1" key={index}>
                              <p className="std-font1 std-boldFont">
                          Posted by {review.username} on {review.date}
                              </p>
                              <Rating
                                  name="read-only"
                                  value={review.stars}
                                  precision={0.5}
                                  readOnly
                              />
                              <p className="std-font1">{review.review}</p>
                          </li>
                      );
                  })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDetails;
