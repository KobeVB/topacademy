import React, { Component } from "react";
import css from "./Artist.module.scss";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import Element from "../../genericComponents/Element/Element";

export default class Artist extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["wrapper"]}>
					<div className={css["content"]}>
						<div className={[css["box"], css["head"]].join(" ")}>
							<h1>{this.props.blok.title}</h1>
						</div>
						<div className={[css["box"], css["sidebar"]].join(" ")}>
							<div className={css["artistimage"]}><img src={this.props.blok.image.filename} /></div>
							<div className={css["artistdetails"]}>
								<div className={css["artistdetailitem"]}>{this.props.blok.title}</div>
							</div>
						</div>
						{/* <div className={[css["box"], css["experience"]].join(" ")}>
							<h2>Experience</h2>
							{this.props.blok.experiences.map((nestedBlok) => (
								<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
							))}
						</div> */}
						<div className={[css["box"], css["experience"]].join(" ")}>
							<h2>Bio</h2>
							<div>{RichTextToHTML({ document: this.props.blok.bio })}</div>
						</div>
						<div>
						<h1>Albums</h1>
							<div>
							{this.props.blok.albums && this.props.blok.albums.map((album) => (
								<Element blok={album} key={album._uid} />
							))}
							</div>
						</div>
						<div className={[css["box"], css["foot"]].join(" ")}>
							<div>&copy; {this.props.blok.title} {new Date().getFullYear()}</div>
						</div>
					</div>
				</div>
			</>
		);
		
	}
}