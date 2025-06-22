declare module "*.module.scss" {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
	import React, { FC } from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __PLATFORM__: "mobile" | "desktop";

declare module "remotePrograms/ProgramsMF" {
	import { FC } from "react";
	const ProgramsMF: FC;
	export default ProgramsMF;
}
declare module "remotePrograms/DetailedProgramPage" {
	import { FC } from "react";
	const DetailedProgramPage: FC;
	export default DetailedProgramPage;
}
declare module "remoteServices/ServicesMF" {
	import { FC } from "react";
	const ServicesMF: FC;
	export default ServicesMF;
}
