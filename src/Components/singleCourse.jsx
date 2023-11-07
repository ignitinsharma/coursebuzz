import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState("");

  const fetchSingleProduct = () => {
    axios
      .get(`https://sore-garment-tick.cyclic.app/api/courses/${id}`)
      .then((response) => setSingleProduct(response.data));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <>
      <div className="flex justify-center w-full mx-auto h-auto py-8 bg-black">
        <h2 className="text-[white] font-medium text-[1.4rem]">CourseBuzz</h2>
      </div>
      <div className="block p-2 md:flex">
        <div className="w-[98%]  md:w-[65%]">
          <img
            src={singleProduct?.thumbnail}
            alt={singleProduct.name}
            className="h-[200px]  w-full md:h-[500px] object-cover"
          />
          <h1 className="text-3xl font-bold mt-2">{singleProduct.name}</h1>
        </div>
        <div className="w-[100%] mt-4 md:mt-0 md:w-[35%] max-w-2xl mx-auto bg-white md:px-4">
          <p className="text-[19px] font-medium text-[grey]">
            <span className="text-black text-[16px]">by</span>{" "}
            {singleProduct.instructor}
          </p>
          <p className="font-bold">
            Description:
            <span className="font-normal"> {singleProduct.description}</span>
          </p>
          <p className="font-bold">
            Enrollment Status:{" "}
            <span className="font-normal">
              {singleProduct.enrollmentStatus}
            </span>
          </p>
          <p className="font-bold">
            Duration:
            <span className="font-normal"> {singleProduct?.duration}</span>
          </p>
          <p className="font-bold">
            Schedule:
            <span className="font-normal"> {singleProduct?.schedule}</span>
          </p>
          <p className="font-bold">
            Location:
            <span className="font-normal"> {singleProduct?.location}</span>
          </p>
          <p className="font-bold">
            Pre-requisites:
            <span className="font-normal">
              {` ${singleProduct?.prerequisites}`}
            </span>
          </p>
          <div className="my-4">
            <p className="font-bold">Syllabus</p>
            <ul className="list-disc pl-4">
              {singleProduct.syllabus?.map((item, index) => (
                <li key={index}>
                  <p className="font-bold">{item.topic}</p>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4">
            <p className="font-bold">Students</p>
            <ul className="list-disc pl-4">
              {singleProduct.students?.map((student, index) => (
                <li key={index}>
                  <p className="font-bold">{student.name}</p>
                  <p>Email: {student.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/*
       <p>Pre-requisites: {singleProduct.prerequisites[0]}</p>
       
        </div>
         */}
    </>
  );
};

export default SingleCourse;
