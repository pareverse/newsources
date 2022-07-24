import { css } from '@emotion/react'

export const themes = css`
	[data-theme] {
		--white: #ffffff;
		--black: #000000;
		--transparent: #00000000;

		--gray-100: #edf2f7;
		--gray-200: #e2e8f0;
		--gray-300: #cbd5e0;
		--gray-400: #a0aec0;
		--gray-500: #718096;
		--gray-600: #4a5568;
		--gray-700: #2d3748;
		--gray-800: #1a202c;
		--gray-900: #171923;

		--red-100: #fed1cf;
		--red-200: #fd9fa4;
		--red-300: #fb6f84;
		--red-400: #f74b76;
		--red-500: #f31260;
		--red-600: #d00d64;
		--red-700: #ae0963;
		--red-800: #8c055c;
		--red-900: #740357;

		--orange-100: #ffeed1;
		--orange-200: #ffd9a3;
		--orange-300: #ffbe75;
		--orange-400: #ffa453;
		--orange-500: #ff791a;
		--orange-600: #db5a13;
		--orange-700: #b7400d;
		--orange-800: #932a08;
		--orange-900: #7a1a04;

		--yellow-100: #fef4d3;
		--yellow-200: #fee6a7;
		--yellow-300: #fcd47b;
		--yellow-400: #f9c259;
		--yellow-500: #f5a524;
		--yellow-600: #d2841a;
		--yellow-700: #b06712;
		--yellow-800: #8e4c0b;
		--yellow-900: #753906;

		--green-100: #cffcd1;
		--green-200: #a1f9ac;
		--green-300: #6fee8d;
		--green-400: #4ade7b;
		--green-500: #17c964;
		--green-600: #10ac63;
		--green-700: #0b905f;
		--green-800: #077457;
		--green-900: #046050;

		--blue-100: #cbecfe;
		--blue-200: #98d5fe;
		--blue-300: #64b9fc;
		--blue-400: #3e9df9;
		--blue-500: #0072f5;
		--blue-600: #0058d2;
		--blue-700: #0041b0;
		--blue-800: #002e8e;
		--blue-900: #002075;

		--indigo-100: #e6d1ff;
		--indigo-200: #cba3ff;
		--indigo-300: #ac75ff;
		--indigo-400: #9253ff;
		--indigo-500: #661aff;
		--indigo-600: #4e13db;
		--indigo-700: #3a0db7;
		--indigo-800: #280893;
		--indigo-900: #1b047a;

		--violet-100: #fbd1ff;
		--violet-200: #f2a3ff;
		--violet-300: #e375ff;
		--violet-400: #d153ff;
		--violet-500: #b31aff;
		--violet-600: #8b13db;
		--violet-700: #690db7;
		--violet-800: #4a0893;
		--violet-900: #35047a;
	}

	[data-theme='light'] {
		--color-scheme: light;
		--body-background: var(--white);
		--body-text-color: var(--gray-900);

		--gray-alpha-25: #cbd5e025;
		--gray-alpha-50: #cbd5e050;
		--gray-alpha-75: #cbd5e075;

		--red-alpha-25: #fed1cf25;
		--red-alpha-50: #fed1cf50;
		--red-alpha-75: #fed1cf75;

		--orange-alpha-25: #ffeed125;
		--orange-alpha-50: #ffeed150;
		--orange-alpha-75: #ffeed175;

		--yellow-alpha-25: #fef4d325;
		--yellow-alpha-50: #fef4d350;
		--yellow-alpha-75: #fef4d375;

		--green-alpha-25: #cffcd125;
		--green-alpha-50: #cffcd150;
		--green-alpha-75: #cffcd175;

		--blue-alpha-25: #cbecfe25;
		--blue-alpha-50: #cbecfe50;
		--blue-alpha-75: #cbecfe75;

		--indigo-alpha-25: #e6d1ff25;
		--indigo-alpha-50: #e6d1ff50;
		--indigo-alpha-75: #e6d1ff75;

		--violet-alpha-25: #fbd1ff25;
		--violet-alpha-50: #fbd1ff50;
		--violet-alpha-75: #fbd1ff75;

		--button-background: var(--gray-100);
		--button-color: var(--gray-500);
		--button-outline: var(--gray-500);
	}

	[data-theme='night'] {
		--color-scheme: dark;
		--body-background: var(--gray-900);
		--body-text-color: var(--white);

		--gray-alpha-25: #2d374825;
		--gray-alpha-50: #2d374850;
		--gray-alpha-75: #2d374875;

		--red-alpha-25: #74035725;
		--red-alpha-50: #74035750;
		--red-alpha-75: #74035775;

		--orange-alpha-25: #7a1a0425;
		--orange-alpha-50: #7a1a0450;
		--orange-alpha-75: #7a1a0475;

		--yellow-alpha-25: #75390625;
		--yellow-alpha-50: #75390650;
		--yellow-alpha-75: #75390675;

		--green-alpha-25: #04605025;
		--green-alpha-50: #04605050;
		--green-alpha-75: #04605075;

		--blue-alpha-25: #00207525;
		--blue-alpha-50: #00207550;
		--blue-alpha-75: #00207575;

		--indigo-alpha-25: #1b047a25;
		--indigo-alpha-50: #1b047a50;
		--indigo-alpha-75: #1b047a75;

		--violet-alpha-25: #35047a25;
		--violet-alpha-50: #35047a50;
		--violet-alpha-75: #35047a75;

		--button-background: var(--gray-800);
		--button-color: var(--gray-500);
		--button-outline: var(--gray-500);
	}
`
