import styled from "styled-components";
import { loader } from "../../utils";
import { FlexContainer } from "../base";

const Container = styled(FlexContainer)`
    flex-direction: column;
    gap: var(--space-sm);
    width: 100%;
    height: 100%;

    span {
        font-weight: 500;
    }
`;

const Svg = styled.svg.attrs({
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 381.0013 440.3333',
})`
    height: 5em;
    width: 5em;
    fill: currentColor;
    .paw {
        animation: ${loader} 1s ease-in-out infinite alternate;
    }
    
    .cat {
        fill: var(--color-background);
    }

    .outline {
        fill: var(--color-secondary);
    }

    .coin {
        fill: var(--color-primary);
    }

    .stroke {
        fill: none;
        stroke-linecap:round;
        stroke-linejoin:round;
        stroke-width: 14px;

        &.face {
            stroke: var(--color-secondary);
        }

        &.coin {
            stroke: var(--color-background);
        }
    }
`;

export const Loader = ({message = 'Cargando...'}) => {
    return(
        <Container>
            <Svg>
                <path className="cat" d="M261,395.8013a7,7,0,0,1-7-7V355.398a42.064,42.064,0,1,1,84.1279,0v33.4033a7,7,0,0,1-7,7Z"/>
                <path className="outline" d="M296.0636,320.334a35.0638,35.0638,0,0,1,35.0639,35.0638v33.4035H261V355.3978a35.0638,35.0638,0,0,1,35.0638-35.0638h0m0-14A49.1193,49.1193,0,0,0,247,355.3978v33.4035a14,14,0,0,0,14,14h70.1277a14,14,0,0,0,14-14V355.3978a49.1194,49.1194,0,0,0-49.0639-49.0638Z"/>
                <path className="cat" d="M186.8309,429.7632c-81.5742,0-147.9394-66.3652-147.9394-147.9394a147.9351,147.9351,0,1,1,295.87,0C334.7616,363.398,268.4,429.7632,186.8309,429.7632Z"/>
                <path className="outline" d="M186.8313,140.8835a140.7963,140.7963,0,1,1-134.44,98.51,140.98,140.98,0,0,1,134.44-98.51m0-14a153.6706,153.6706,0,0,0-92.4734,30.6113A154.6208,154.6208,0,0,0,31.8913,281.8235a154.937,154.937,0,0,0,264.495,109.559,154.932,154.932,0,0,0-109.555-264.499Z"/>
                <path className="cat" d="M186.8309,258.6939c-69.019,0-125.17-50.71-125.17-113.04A104.6875,104.6875,0,0,1,80.5756,85.87l9.22-67.5142a13.121,13.121,0,0,1,21.6982-8.06l32.7881,29.02a138.3836,138.3836,0,0,1,85.0889,0l32.792-29.0147a13.1217,13.1217,0,0,1,21.705,8.0581L293.0868,85.87a104.6871,104.6871,0,0,1,18.9141,59.7832C312.0009,207.9839,255.85,258.6939,186.8309,258.6939Z"/>
                <path className="outline" d="M270.8343,14a6.1165,6.1165,0,0,1,6.097,5.3035l9.45,69.2a97.7662,97.7662,0,0,1,18.62,57.15c0,58.56-52.91,106.04-118.17,106.04-65.27,0-118.17-47.48-118.17-106.04a97.7662,97.7662,0,0,1,18.62-57.15l9.45-69.2A6.1169,6.1169,0,0,1,102.8283,14a6.0433,6.0433,0,0,1,4.033,1.5435l35.84,31.72a131.0809,131.0809,0,0,1,88.25,0l35.85-31.72A6.0448,6.0448,0,0,1,270.8343,14m0-14h-.0007a20.09,20.09,0,0,0-13.2977,5.0479L227.6853,31.46a145.7016,145.7016,0,0,0-81.7168,0L116.14,5.06A20.1211,20.1211,0,0,0,82.8591,17.4159L73.8632,83.2914a111.5133,111.5133,0,0,0-19.2019,62.3621c0,32.3518,13.9421,62.6806,39.2581,85.3994,24.8919,22.3383,57.8887,34.6406,92.9119,34.6406,35.0193,0,68.0147-12.3022,92.9078-34.64,25.3186-22.72,39.2622-53.0488,39.2622-85.4A111.5142,111.5142,0,0,0,299.8,83.2914l-8.997-65.8822A20.2149,20.2149,0,0,0,270.8345,0Z"/>
                <path className="cat" d="M321.0429,279.9712a34.3156,34.3156,0,0,1-34.2774-34.2763V184.9717a7,7,0,0,1,7-7h54.5537a7,7,0,0,1,7,7v60.7232A34.3147,34.3147,0,0,1,321.0429,279.9712Z"/>
                <path className="outline" d="M348.3189,184.9716V245.695a27.2766,27.2766,0,0,1-27.2765,27.2766h0a27.2766,27.2766,0,0,1-27.2765-27.2766V184.9716h54.5531m0-14H293.7658a14,14,0,0,0-14,14V245.695a41.2766,41.2766,0,1,0,82.5531,0V184.9716a14,14,0,0,0-14-14Z"/>
                <path className="cat" d="M271.3544,433.3335a30.6035,30.6035,0,0,1-30.3975-28.1552,53.9125,53.9125,0,0,1-.0859-6.6729,52.8534,52.8534,0,0,1,49.3769-50.208c1.169-.0762,2.3526-.1142,3.5186-.1142a52.9569,52.9569,0,0,1,52.959,52.96c0,1.4912-.0625,2.9971-.1866,4.4756A30.55,30.55,0,0,1,316.18,433.3335Z"/>
                <path className="outline" d="M293.7658,355.1833a45.9562,45.9562,0,0,1,45.96,45.96q0,1.9659-.1628,3.8916A23.3969,23.3969,0,0,1,316.18,426.3333H271.3548a23.4745,23.4745,0,0,1-23.417-21.6838,46.72,46.72,0,0,1-.0759-5.8031,46.1173,46.1173,0,0,1,42.8392-43.5636q1.5437-.1,3.0647-.1m0-14c-1.3157,0-2.6516.0433-3.9705.1288a60.117,60.117,0,0,0-55.9168,56.8516,60.9613,60.9613,0,0,0,.0992,7.5414,37.4744,37.4744,0,0,0,37.3771,34.6282H316.18a37.521,37.521,0,0,0,25.2651-9.7517,37.0106,37.0106,0,0,0,12.0686-24.3744c.1407-1.6739.212-3.3777.212-5.0639a59.9564,59.9564,0,0,0-59.96-59.96Z"/>
                <path className="cat" d="M57.4794,433.3335a30.5489,30.5489,0,0,1-30.3589-27.7128c-.124-1.4844-.187-2.99-.187-4.4776a52.9576,52.9576,0,0,1,52.959-52.96c1.1655,0,2.35.038,3.5185.1142a52.8537,52.8537,0,0,1,49.3779,50.207,54.0013,54.0013,0,0,1-.0874,6.6719,30.6018,30.6018,0,0,1-30.3969,28.1572Z"/>
                <path className="outline" d="M79.8934,355.1833q1.5209,0,3.0646.1a46.1174,46.1174,0,0,1,42.8393,43.5636,46.72,46.72,0,0,1-.076,5.8031,23.4744,23.4744,0,0,1-23.4169,21.6838H57.4792a23.397,23.397,0,0,1-23.383-21.2984q-.1617-1.9246-.1628-3.8916a45.9564,45.9564,0,0,1,45.96-45.96m0-14a59.9564,59.9564,0,0,0-59.96,59.96c0,1.6862.0713,3.39.212,5.0639a37.01,37.01,0,0,0,12.0687,24.3744,37.521,37.521,0,0,0,25.2651,9.7517h44.8252a37.4744,37.4744,0,0,0,37.3771-34.6282,60.9793,60.9793,0,0,0,.0992-7.5414A60.1169,60.1169,0,0,0,83.864,341.3122c-1.3187-.0856-2.6547-.1289-3.9706-.1289Z"/>
                <path className="coin" d="M73.1854,433.3335A66.26,66.26,0,0,1,7,367.148V270.9732a66.1853,66.1853,0,0,1,132.3706,0V367.148A66.26,66.26,0,0,1,73.1854,433.3335Z"/>
                <path className="outline" d="M73.1852,211.7882A59.1852,59.1852,0,0,1,132.37,270.9734v96.1747a59.1851,59.1851,0,0,1-59.1852,59.1851h0A59.1851,59.1851,0,0,1,14,367.1481V270.9734a59.1852,59.1852,0,0,1,59.1851-59.1852h0m0-14A73.268,73.268,0,0,0,0,270.9734v96.1747a73.1852,73.1852,0,0,0,146.37,0V270.9734a73.268,73.268,0,0,0-73.1852-73.1852Z"/>
                <path className="coin" d="M73.1854,405.0777A39.9662,39.9662,0,0,1,33.264,365.1568V272.9644a39.9212,39.9212,0,0,1,79.8423,0v92.1924A39.9658,39.9658,0,0,1,73.1854,405.0777Z"/>
                <path className="cat" d="M73.1852,240.0436a32.9209,32.9209,0,0,1,32.921,32.9209V365.157a32.9209,32.9209,0,0,1-32.921,32.9209h0a32.9209,32.9209,0,0,1-32.921-32.9209V272.9645a32.9209,32.9209,0,0,1,32.921-32.9209h0m0-14a46.9741,46.9741,0,0,0-46.921,46.9209V365.157a46.921,46.921,0,0,0,93.842,0V272.9645a46.9741,46.9741,0,0,0-46.921-46.9209Z"/>
                <line className="stroke coin" x1="60.6897" y1="319.0607" x2="85.6807" y2="319.0607"/>
                <line className="stroke coin" x1="60.6897" y1="360.6311" x2="85.6807" y2="360.6311"/>
                <line className="stroke coin" x1="60.6897" y1="277.4904" x2="85.6807" y2="277.4904"/>
                <path className="cat" d="M50.7743,260.1421a30.6019,30.6019,0,0,1-30.397-28.1562,53.8842,53.8842,0,0,1-.0879-6.6714,52.8544,52.8544,0,0,1,49.378-50.208c1.1689-.0757,2.352-.1143,3.5175-.1143a52.957,52.957,0,0,1,52.96,52.96c0,1.49-.063,2.9971-.1875,4.4785A30.5486,30.5486,0,0,1,95.6,260.1421Z"/>
                <path className="outline" d="M73.1851,181.9923a45.9564,45.9564,0,0,1,45.96,45.96q0,1.9659-.1628,3.8916a23.3969,23.3969,0,0,1-23.383,21.2984H50.7742a23.4744,23.4744,0,0,1-23.4169-21.6837,46.741,46.741,0,0,1-.076-5.8032,46.1175,46.1175,0,0,1,42.8393-43.5636q1.5436-.1,3.0645-.1m0-14c-1.3156,0-2.6514.0434-3.97.1289A60.1168,60.1168,0,0,0,13.298,224.9727a60.94,60.94,0,0,0,.0992,7.5414,37.4744,37.4744,0,0,0,37.377,34.6282H95.5994a37.5212,37.5212,0,0,0,25.2652-9.7517,37.01,37.01,0,0,0,12.0686-24.3744c.1407-1.6739.212-3.3776.212-5.0639a59.9566,59.9566,0,0,0-59.96-59.96Z"/>
                <path className="outline" d="M125.4852,56.4137,111.7094,44.46a2.5737,2.5737,0,0,0-4.26,2.0109L108.019,68.33a2.5738,2.5738,0,0,0,4.1171,1.992l13.2065-9.9049A2.5737,2.5737,0,0,0,125.4852,56.4137Z"/>
                <path className="outline" d="M248.174,56.4137,261.95,44.46a2.5737,2.5737,0,0,1,4.26,2.0109L265.64,68.33a2.5738,2.5738,0,0,1-4.1171,1.992l-13.2065-9.9049A2.5737,2.5737,0,0,1,248.174,56.4137Z"/>
                <path className="stroke face" d="M121.4253,128.4609s25.8458-1.516,40.8378,14.5612"/>
                <path className="stroke face" d="M215.6381,198.8439s-.766,8.6808-12.2553,8.6808-4.5147-9.7011-16.5531-9.7021c-12.0386.0009-5.0645,9.7021-16.5533,9.7021s-12.2553-8.6808-12.2553-8.6808"/>
                <path className="stroke face" d="M252.2338,128.4609s-25.8457-1.516-40.8377,14.5612"/>
                <path className="outline" d="M176.6594,34.929V74.4165c0,7.893-7.1787,14.297-16.0391,14.297s-16.039-6.404-16.039-14.297V41.5681"/>
                <path className="outline" d="M229.0779,41.5681V74.4165c0,7.893-7.1787,14.297-16.0391,14.297S197,82.31,197,74.4165V34.929"/>
                <g className="paw">
                    <path className="cat" d="M298.6307,199.8033a30.6019,30.6019,0,0,1-30.3974-28.1563,53.8671,53.8671,0,0,1-.0869-6.6719,52.8544,52.8544,0,0,1,49.3769-50.2075c1.169-.0757,2.3526-.1142,3.5176-.1142a52.9561,52.9561,0,0,1,52.96,52.96c0,1.4917-.0625,2.9976-.1866,4.4756a30.5493,30.5493,0,0,1-30.3584,27.7144Z"/>
                    <path className="outline" d="M321.0413,121.6535a45.9564,45.9564,0,0,1,45.96,45.96q0,1.9659-.1629,3.8915a23.397,23.397,0,0,1-23.3829,21.2985H298.63A23.4744,23.4744,0,0,1,275.2134,171.12a46.7026,46.7026,0,0,1-.0759-5.8032,46.1173,46.1173,0,0,1,42.8392-43.5636q1.5437-.1,3.0646-.1m0-14c-1.3157,0-2.6516.0433-3.97.1288a60.1168,60.1168,0,0,0-55.9167,56.8516,60.9433,60.9433,0,0,0,.0992,7.5417,37.4744,37.4744,0,0,0,37.377,34.6279h44.8252a37.5214,37.5214,0,0,0,25.2651-9.7517,37.01,37.01,0,0,0,12.0687-24.3744c.1406-1.6742.212-3.378.212-5.0639a59.9562,59.9562,0,0,0-59.96-59.96Z"/>
                </g>
            </Svg>
            <span>{message}</span>
        </Container>
    )
};