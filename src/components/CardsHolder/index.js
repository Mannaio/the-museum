import styled from "styled-components";
import React from "react";

const CardHolderContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 50px;
`;

const CardHolderTitle = styled.h2`
    flex: 1;
    margin: 0;
    font-size: 48px;
    font-weight: 500;
    font-style: normal;
    color: #000;
    letter-spacing: -0.04em;
    line-height: 56px;
    text-transform: uppercase;
`;

const CardHolderDropDown = styled.div`
    display: none;
    @media only screen and (min-width: 992px) {
        display: flex
    }
`;

const CardHolderDropDownDate = styled.div`
    display: flex;
    
`;

const CardHolderDropDownActivity = styled.div`
    display: flex;
    margin-left: 25px
`;

const CardHolderDropDownTitle = styled.h2`
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  color: #000;
  letter-spacing: -0.04em;
  line-height: 42px;
  text-transform: uppercase;
  margin: 0 15px 0 0;
`;

const CardHolderSelectWrapper = styled.div`
    display: flex;
    width: 200px;
    overflow: hidden;
    border-bottom: 1px solid #DDD;
    position: relative;
    padding: 10px 0;
    &:after {
        width: 0; 
        height: 0; 
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 7px solid #f00;
        position: absolute;
        top: 17px;
        right: 2px;
        content: "";
        z-index: 999;        
    }
`;

const CardHolderSelect = styled.select`
    font-family: 'Work Sans', sans-serif;
    width: 396px;
    border: 0;
    position: relative;
    z-index: 99;
    background: none;
`;

const CardsHolder = () => {

    const dates = [
        { "Tutte le date": "1" },
        { Second: "2" },
        { Third: "3" },
        { Fourth: "4" }
    ];

    const activities = [
        { "Tutte le attività": "1" },
        { Second: "2" },
        { Third: "3" },
        { Fourth: "4" }
    ];

    return (
        <div>
            <CardHolderContainer>
                <CardHolderTitle>Title</CardHolderTitle>
                <CardHolderDropDown>
                    <CardHolderDropDownDate>
                        <CardHolderDropDownTitle>Data</CardHolderDropDownTitle>
                        <CardHolderSelectWrapper>
                            <CardHolderSelect>
                                {dates.map(date => {
                                    return (
                                        <option key={Object.values(date)} value={Object.values(date)}>
                                            {" "}
                                            {Object.keys(date)}{" "}
                                        </option>
                                    );
                                })}
                            </CardHolderSelect>
                        </CardHolderSelectWrapper>
                    </CardHolderDropDownDate>
                    <CardHolderDropDownActivity>
                        <CardHolderDropDownTitle>Cosa</CardHolderDropDownTitle>
                        <CardHolderSelectWrapper>
                            <CardHolderSelect>
                                {activities.map(activity => {
                                    return (
                                        <option key={Object.values(activity)} value={Object.values(activity)}>
                                            {" "}
                                            {Object.keys(activity)}{" "}
                                        </option>
                                    );
                                })}
                            </CardHolderSelect>
                        </CardHolderSelectWrapper>
                    </CardHolderDropDownActivity>
                </CardHolderDropDown>
            </CardHolderContainer>
        </div>
    );
}


export default CardsHolder;