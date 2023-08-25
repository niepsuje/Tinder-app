import Nav from "../components/Nav"
import {useState} from 'react'

const OnBoarding = () => {


    const handleSubmit = () => {
        console.log('submitted')
    }
    const handleChange = () => {
        console.log('change')
    }
    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {}}
                ShowModal={false}
            />
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>


                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                        

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                        <input
                            id="dob_day"
                            type="number"
                            name="dob_day"
                            placeholder="DD"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />


                        <input
                            id="dob_month"
                            type="number"
                            name="dob_day"
                            placeholder="MM"
                            required={true}
                            value={"formData.dob_month"}
                            onChange={handleChange}
                        />

                        <input
                            id="dob_year"
                            type="number"
                            name="dob_year"
                            placeholder="YYYY"
                            required={true}
                            value={"formData.dob_year"}
                            onChange={handleChange}
                        />
                        </div>


                        <label>Gander</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input
                                id="more-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="more"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more-gender-identity">more</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={false}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more-gender-interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks.."
                            onChange={handleChange}
                        />
                        <input type="submit"/>
                    </section>

                    <section>
                        <label htmlFor="url">Profile Profile</label>
                        <input
                            id="url"
                            type="url"
                            name="url"
                            required={true}
                            onChange={handleChange}
                        />
                        <div className="photo-container">

                        </div>
                    </section>

                </form>

            </div>
        </>
    )
}

export default OnBoarding