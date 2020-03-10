import {Helmet} from "react-helmet";
import React, {Component} from "react";

export default class Seo extends Component {
    render() {
        return (
            <div>
                {this.props.title.length > 0
                    ?
                    <Helmet>
                        <title>{this.props.title}</title>
                        <meta name="description" content={this.props.description}/>
                    </Helmet>
                    :
                    <Helmet>
                        <title>NutritionFacts.io | Nutrition Facts and Information</title>
                        <meta name="description"
                              content={"Nutrition facts and information. Check calories, carbs, and fat values, including vitamins and minerals with percent daily values."}/>
                    </Helmet>
                }
            </div>
        )
    }
}