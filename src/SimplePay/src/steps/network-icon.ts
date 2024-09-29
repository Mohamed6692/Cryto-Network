import { html, LitElement, property } from 'lit-element';
import { customElement } from 'lit/decorators.js';

@customElement('network-icon')
export class NetworkIcon extends LitElement {
    @property({ type: String })
    id: string = '';

    @property({ type: Number })
    width: number = 24;

    @property({ type: Number })
    height: number = 24;

    @property({ type: String })
    class: string = '';

    render() {
        return html`
            <div style="display: none">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <!-- Bitcoin Icon -->
                    <symbol id="bitcoin" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#F5B300" />
                        <path
                            d="M7.78381 5.51755C8.2245 5.63774 8.66518 5.71786 9.10587 5.83805C9.54656 5.95824 9.98725 6.03837 10.4279 6.15855C10.5481 6.19862 10.5882 6.15855 10.6283 6.03837C10.7885 5.3573 10.9488 4.7163 11.109 4.03524C11.1491 3.91505 11.1891 3.87499 11.3093 3.91505C11.7099 4.03524 12.0705 4.11536 12.4711 4.19549C12.5913 4.23555 12.5913 4.27561 12.5513 4.35574C12.391 4.99674 12.2308 5.6778 12.0705 6.3188C12.0705 6.35887 12.0705 6.39893 12.0304 6.47905C12.3509 6.55918 12.7115 6.6393 13.032 6.71943C13.0721 6.71943 13.1121 6.6393 13.1522 6.59924C13.2724 6.07843 13.3926 5.59768 13.5528 5.07686C13.5929 4.91661 13.6329 4.75636 13.673 4.59611C13.673 4.51599 13.7131 4.47592 13.7932 4.51599C14.1938 4.63617 14.5944 4.7163 15.0351 4.83649C15.0752 4.83649 15.0752 4.87655 15.1153 4.87655C14.9951 5.39736 14.8749 5.87812 14.7547 6.35887C14.7146 6.55918 14.6746 6.75949 14.5944 6.9598C14.5544 7.07999 14.5944 7.12006 14.7146 7.16012C15.1553 7.36043 15.596 7.56074 16.0367 7.76106C16.4373 8.00143 16.7979 8.32193 17.0783 8.72256C17.4389 9.3235 17.479 9.9645 17.3187 10.6055C17.1985 11.0462 17.0383 11.4468 16.7178 11.7673C16.4774 12.0077 16.1569 12.1679 15.8364 12.2881C15.7963 12.2881 15.7563 12.3282 15.6761 12.3282C15.8364 12.4484 15.9966 12.5285 16.1569 12.6487C16.6376 13.0093 16.9581 13.4499 17.1184 14.0108C17.1985 14.4515 17.1585 14.9323 17.0383 15.373C16.878 15.9338 16.6777 16.4146 16.3171 16.8553C15.8765 17.3761 15.3156 17.6565 14.6746 17.7366C13.8333 17.8568 13.032 17.7767 12.2308 17.6565C12.1106 17.6165 12.0304 17.6565 11.9904 17.7767C11.8301 18.4177 11.6699 19.0988 11.5096 19.7398C11.4696 19.9 11.4696 19.9401 11.2693 19.86C10.9087 19.7798 10.5081 19.6596 10.1475 19.5795C10.0273 19.5395 10.0273 19.4994 10.0674 19.4193C10.2276 18.7382 10.3879 18.0571 10.5882 17.4161C10.5882 17.336 10.6283 17.296 10.5481 17.2559C10.2276 17.1758 9.90712 17.0956 9.54656 17.0155C9.46644 17.3761 9.34625 17.7366 9.26612 18.0972C9.186 18.4578 9.06581 18.8183 8.98569 19.1789C8.94562 19.259 8.94562 19.2991 8.82544 19.259C8.42481 19.1388 8.02418 19.0587 7.62356 18.9786C7.50337 18.9385 7.50337 18.8985 7.54343 18.8183C7.70368 18.1373 7.86393 17.4562 8.06425 16.8152C8.06425 16.7751 8.10431 16.7351 8.10431 16.655C7.18287 16.4146 6.26143 16.1742 5.29993 15.9338C5.38005 15.7736 5.42011 15.6534 5.50024 15.4931C5.66049 15.1326 5.82074 14.772 5.94093 14.4515C5.98099 14.3313 6.02105 14.3313 6.14124 14.3313C6.42168 14.4114 6.74218 14.4916 7.02262 14.5316C7.34312 14.6118 7.58349 14.4515 7.62356 14.1711C8.14437 12.1279 8.66518 10.0847 9.14594 8.00143C9.22606 7.68093 9.02575 7.32037 8.66518 7.20018C8.30462 7.07999 7.94406 6.99987 7.62356 6.91974C7.54343 6.91974 7.50337 6.87968 7.54343 6.79955C7.66362 6.35887 7.78381 5.87812 7.904 5.43743C7.74374 5.55761 7.74375 5.55761 7.78381 5.51755ZM9.827 15.413C9.86706 15.413 9.90712 15.4531 9.90712 15.4531C10.5481 15.6133 11.2292 15.8136 11.9103 15.8537C12.391 15.8938 12.8317 15.8938 13.2724 15.7335C14.0336 15.4931 14.3541 14.4916 13.9134 13.8506C13.7131 13.5301 13.3926 13.3298 13.0721 13.1294C12.3509 12.7288 11.5096 12.5686 10.7084 12.4083C10.5882 12.3683 10.5882 12.4083 10.5481 12.5285C10.468 12.9291 10.3478 13.2897 10.2677 13.6903C10.1074 14.2512 9.98725 14.8121 9.827 15.413ZM13.1923 11.3266C13.2724 11.3266 13.4727 11.2866 13.6329 11.2465C14.3941 11.0863 14.7948 10.2049 14.3941 9.52381C14.1938 9.16325 13.8333 8.92287 13.4727 8.76262C12.9118 8.52225 12.3509 8.40206 11.75 8.24181C11.6298 8.20175 11.5898 8.24181 11.5497 8.362C11.3494 9.20331 11.1491 10.0046 10.9087 10.8459C10.8686 10.926 10.9087 10.9661 10.9888 11.0061C11.1491 11.0462 11.2693 11.0863 11.4295 11.1263C12.0304 11.2064 12.5513 11.3266 13.1923 11.3266Z"
                            fill="white"
                        />
                    </symbol>

                    <!-- BSC Icon -->
                    <symbol id="bsc" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#F3BA2F" />
                        <path
                            d="M13.6673 17.9483V19.9655L11.9086 21L10.2017 19.9655V17.9483L11.9086 18.9828L13.6673 17.9483ZM4.25347 10.9655L5.96037 12V15.4655L8.90864 17.2241V19.2414L4.25347 16.5V10.9655ZM19.5638 10.9655V16.5L14.8569 19.2414V17.2241L17.8052 15.4655V12L19.5638 10.9655ZM14.8569 8.22414L16.6155 9.25862V11.2759L13.6673 13.0345V16.5517L11.9604 17.5862L10.2535 16.5517V13.0345L7.20175 11.2759V9.25862L8.96037 8.22414L11.9086 9.98276L14.8569 8.22414ZM7.20175 12.7241L8.90864 13.7586V15.7759L7.20175 14.7414V12.7241ZM16.6155 12.7241V14.7414L14.9086 15.7759V13.7586L16.6155 12.7241ZM5.96037 6.46552L7.71899 7.5L5.96037 8.53448V10.5517L4.25347 9.51724V7.5L5.96037 6.46552ZM17.8569 6.46552L19.6155 7.5V9.51724L17.8569 10.5517V8.53448L16.15 7.5L17.8569 6.46552ZM11.9086 6.46552L13.6673 7.5L11.9086 8.53448L10.2017 7.5L11.9086 6.46552ZM11.9086 3L16.6155 5.74138L14.9086 6.77586L11.9604 5.01724L8.96037 6.77586L7.25347 5.74138L11.9086 3Z"
                            fill="white"
                        />
                    </symbol>

                    <!-- Ethereum Icon -->
                    <symbol id="ethereum" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#E9E9E9" />
                        <g clip-path="url(#clip0_8_136)">
                            <path
                                d="M11.9984 3L11.8811 3.38729V14.6256L11.9984 14.7393L17.3652 11.6557L11.9984 3Z"
                                fill="#343434"
                            />
                            <path
                                d="M11.9984 3L6.63158 11.6557L11.9984 14.7393V9.28462V3Z"
                                fill="#8C8C8C"
                            />
                            <path
                                d="M11.9984 15.727L11.9323 15.8053V19.8086L11.9984 19.9962L17.3684 12.645L11.9984 15.727Z"
                                fill="#3C3C3B"
                            />
                            <path
                                d="M11.9984 19.9962V15.727L6.63158 12.645L11.9984 19.9962Z"
                                fill="#8C8C8C"
                            />
                            <path
                                d="M11.9984 14.7393L17.3651 11.6558L11.9984 9.28467V14.7393Z"
                                fill="#141414"
                            />
                            <path
                                d="M6.63158 11.6558L11.9983 14.7393V9.28467L6.63158 11.6558Z"
                                fill="#393939"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_136">
                                <rect
                                    width="10.7368"
                                    height="17"
                                    fill="white"
                                    transform="translate(6.63158 3)"
                                />
                            </clipPath>
                        </defs>
                    </symbol>

                    <!-- Litecoin Icon -->
                    <symbol id="litecoin" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#345D9C" />
                        <path
                            d="M11.2486 15.3085C13.5129 15.3512 15.7357 15.3928 18 15.4771C17.917 15.813 17.8329 16.1062 17.7914 16.4006C17.6645 16.8208 17.5388 17.1995 17.4559 17.6197C17.4132 17.8298 17.329 17.8713 17.1204 17.8713H6.30032C6.67852 16.4006 7.05549 15.0153 7.43247 13.5446C6.84565 13.7547 6.3418 13.9648 5.75499 14.2164C5.92334 13.5873 6.09048 13.0413 6.30032 12.4525C6.30032 12.3694 6.42598 12.3267 6.51016 12.3267C6.88835 12.1593 7.30681 12.0323 7.68379 11.8637C7.80944 11.8234 7.93632 11.6975 7.93632 11.5705L9.69554 5.01928C9.73824 4.76763 9.8212 4.68335 10.1152 4.68335H13.9313C13.4702 6.40455 13.0505 8.12813 12.5894 9.93361C13.2603 9.64041 13.8899 9.38757 14.6023 9.13592C14.5182 9.47185 14.3925 9.76505 14.351 10.0594C14.2668 10.7325 13.8899 11.11 13.2189 11.2785C12.9261 11.3616 12.6308 11.4874 12.338 11.6145C12.234 11.6767 12.1477 11.7632 12.0867 11.8661C11.7927 12.9997 11.4987 14.0918 11.2474 15.2254V15.3097L11.2486 15.3085Z"
                            fill="white"
                        />
                    </symbol>

                    <!-- Monero Icon -->
                    <symbol id="monero" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="white" />
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            fill="white"
                        />
                        <path
                            d="M20.3353 17.3583H16.3886V12L12 16.3302L7.61137 12V17.3583H3.66475H3.53846C5.30654 20.1308 8.43226 22 12 22C15.5677 22 18.6935 20.162 20.4615 17.3583H20.3353Z"
                            fill="#4C4C4C"
                        />
                        <path
                            d="M5.53312 15.0769V6.83753L12 13.2355L18.4669 6.83753V15.0769H21.4637C21.8107 14.0782 22 13.0171 22 11.8935C22 6.4318 17.5205 2 12 2C6.4795 2 2 6.4318 2 11.8935C2 13.0171 2.18927 14.0782 2.53628 15.0769H5.53312Z"
                            fill="#FF6B01"
                        />
                    </symbol>

                    <!-- Solana Icon -->
                    <symbol id="solana" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#1A1A1A" />
                        <path
                            d="M6.60022 15.1606C6.69813 15.0669 6.83086 15.0144 6.96926 15.0144H19.7384C19.971 15.0144 20.0875 15.2836 19.9229 15.4409L17.3998 17.8538C17.3019 17.9474 17.1692 18 17.0308 18H4.26156C4.02896 18 3.91251 17.7308 4.07704 17.5734L6.60022 15.1606Z"
                            fill="url(#paint0_linear_8_165)"
                        />
                        <path
                            d="M6.60022 6.14622C6.69811 6.05259 6.83085 6 6.96926 6H19.7384C19.971 6 20.0875 6.26921 19.9229 6.42658L17.3998 8.83945C17.3019 8.93306 17.1691 8.98564 17.0308 8.98564H4.26156C4.02896 8.98564 3.91251 8.71644 4.07704 8.55909L6.60022 6.14622Z"
                            fill="url(#paint1_linear_8_165)"
                        />
                        <path
                            d="M17.3998 10.6247C17.3019 10.5311 17.1691 10.4785 17.0308 10.4785H4.26156C4.02896 10.4785 3.91251 10.7477 4.07704 10.905L6.60022 13.3179C6.69811 13.4115 6.83085 13.4641 6.96926 13.4641H19.7384C19.971 13.4641 20.0875 13.1949 19.9229 13.0375L17.3998 10.6247Z"
                            fill="url(#paint2_linear_8_165)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_8_165"
                                x1="14.8169"
                                y1="2.70835"
                                x2="6.574"
                                y2="19.2055"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#00FFA3" />
                                <stop offset="1" stop-color="#DC1FFF" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_8_165"
                                x1="14.8169"
                                y1="2.70835"
                                x2="6.574"
                                y2="19.2055"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#00FFA3" />
                                <stop offset="1" stop-color="#DC1FFF" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_8_165"
                                x1="14.8169"
                                y1="2.70835"
                                x2="6.574"
                                y2="19.2055"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#00FFA3" />
                                <stop offset="1" stop-color="#DC1FFF" />
                            </linearGradient>
                        </defs>
                    </symbol>

                    <!-- Tron Icon -->
                    <symbol id="tron" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#EF0027" />
                        <path
                            d="M16.274 7.64202L5.45 5.65002L11.1462 19.984L19.0835 10.3135L16.274 7.64202ZM16.1 8.51952L17.756 10.0938L13.2275 10.9135L16.1 8.51952ZM12.2435 10.7493L7.4705 6.79077L15.272 8.22627L12.2435 10.7493ZM11.9037 11.4498L11.1252 17.8848L6.929 7.32252L11.9037 11.449V11.4498ZM12.6237 11.791L17.639 10.8835L11.8865 17.8908L12.6237 11.791Z"
                            fill="white"
                        />
                    </symbol>

                    <!-- USDT Icon -->
                    <symbol id="usdt" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#50AF95" />
                        <path
                            d="M12.0589 5.07496C13.9152 5.07496 15.6973 5.07496 17.5536 5.07496C17.7021 5.07496 17.7764 5.15017 17.7764 5.22537C18.8159 7.55675 19.8554 9.81292 20.9692 12.0691C21.0435 12.1443 20.9692 12.2195 20.895 12.2947C19.6327 13.5732 18.3704 14.8517 17.0338 16.1302C15.4003 17.7095 13.6924 19.364 12.0589 20.9434C11.9104 21.0186 11.9104 21.0186 11.8361 20.9434C10.2025 19.364 8.56898 17.7847 6.93541 16.1302C5.67311 14.8517 4.33656 13.5732 3.07425 12.2947C3 12.2195 3 12.1443 3 12.0691C3.51977 10.8658 4.1138 9.73771 4.63357 8.53442C5.15334 7.40634 5.67311 6.35346 6.19288 5.22537C6.26713 5.07496 6.34139 4.99976 6.56415 4.99976C8.42047 5.07496 10.2025 4.99976 12.0589 5.07496ZM12.1331 7.10551C10.7966 7.10551 9.38576 7.10551 8.04921 7.10551C7.97496 7.10551 7.97496 7.10551 7.9007 7.10551C7.82645 7.10551 7.82645 7.10551 7.82645 7.18072C7.82645 7.85757 7.82645 8.53442 7.7522 9.28648C7.7522 9.36168 7.7522 9.36168 7.82645 9.36168C8.04921 9.36168 8.27197 9.36168 8.49473 9.36168C9.23726 9.36168 9.97979 9.36168 10.7223 9.36168C10.7966 9.36168 10.7966 9.36168 10.8708 9.36168C10.9451 9.36168 10.9451 9.43689 10.9451 9.51209C10.9451 9.81292 10.9451 10.1889 10.9451 10.4898C10.9451 10.565 10.9451 10.565 10.8708 10.6402C10.3511 10.7154 9.83128 10.7154 9.31151 10.7906C8.64323 10.8658 7.97496 11.0162 7.38093 11.2418C7.08392 11.317 6.86116 11.4674 6.6384 11.6179C6.41564 11.8435 6.41564 12.1443 6.6384 12.2947C6.78691 12.4451 6.93541 12.5203 7.08392 12.5955C7.60369 12.8211 8.12346 12.8963 8.64323 13.0468C9.38577 13.1972 10.1283 13.2724 10.8708 13.3476C11.0193 13.3476 11.0193 13.3476 11.0193 13.498C11.0193 14.8517 11.0193 16.2806 11.0193 17.6343C11.0193 17.7847 11.0193 17.7847 11.1678 17.7847C11.8361 17.7847 12.5786 17.7847 13.2469 17.7847C13.4697 17.7847 13.4697 17.7847 13.4697 17.5591C13.4697 16.431 13.4697 15.3781 13.4697 14.25C13.4697 13.9492 13.4697 13.6484 13.4697 13.3476C13.4697 13.1972 13.5439 13.1972 13.6182 13.1972C14.3607 13.1972 15.029 13.122 15.7715 12.9716C16.3656 12.8963 16.8853 12.7459 17.4051 12.5203C17.5536 12.4451 17.7021 12.2947 17.8506 12.2195C17.9991 12.0691 17.9991 11.9187 17.8506 11.7683C17.7021 11.6931 17.6279 11.5426 17.4793 11.4674C16.5883 10.941 15.5488 10.7154 14.5092 10.6402C14.2122 10.6402 13.9152 10.6402 13.6182 10.565C13.5439 10.565 13.5439 10.565 13.5439 10.4146C13.5439 10.1137 13.5439 9.73771 13.5439 9.43689C13.5439 9.36168 13.5439 9.28648 13.6924 9.28648C13.9152 9.28648 14.138 9.28648 14.3607 9.28648C15.1033 9.28648 15.7715 9.28648 16.5141 9.28648C16.6626 9.28648 16.6626 9.21127 16.6626 9.13607C16.6626 9.06086 16.6626 9.06086 16.6626 8.98565C16.6626 8.38401 16.6626 7.78236 16.6626 7.10551C16.6626 6.9551 16.6626 6.9551 16.5141 6.9551C14.8805 7.10551 13.4697 7.10551 12.1331 7.10551Z"
                            fill="white"
                        />
                        <path
                            d="M11.7616 12.8211C11.2418 12.8211 10.7963 12.8211 10.2765 12.7458C9.45973 12.6706 8.56869 12.5954 7.75191 12.2946C7.6034 12.2194 7.45489 12.1442 7.23213 12.069C7.00937 11.9186 7.00937 11.7682 7.23213 11.693C7.52915 11.5426 7.82616 11.4673 8.12317 11.3921C8.7172 11.2417 9.31122 11.1665 9.9795 11.0913C10.2023 11.0913 10.4993 11.0161 10.722 11.0161C10.7963 11.0161 10.8705 11.0161 10.8705 11.1665C10.8705 11.6178 10.8705 11.9938 10.8705 12.445C10.8705 12.5954 10.9448 12.5954 11.019 12.5954C11.6131 12.5954 12.2071 12.5954 12.7269 12.5954C12.8754 12.5954 13.0239 12.5954 13.1724 12.5954C13.3209 12.5954 13.3209 12.5954 13.3209 12.445C13.3209 12.069 13.3209 11.693 13.3209 11.3169C13.3209 11.0913 13.3209 11.0913 13.5436 11.0913C14.5089 11.1665 15.4742 11.2417 16.4395 11.5426C16.588 11.6178 16.8108 11.693 16.9593 11.7682C17.1078 11.8434 17.1078 11.9938 16.9593 12.069C16.6623 12.2946 16.3653 12.3698 15.994 12.445C15.2515 12.5954 14.5089 12.7458 13.7664 12.7458C13.1724 12.7458 12.4299 12.8211 11.7616 12.8211Z"
                            fill="white"
                        />
                    </symbol>
                </svg>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width=${this.width}
                height=${this.height}
                class=${this.class}
            >
                <use href=${`#${this.id}`} />
            </svg>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'network-icon': NetworkIcon;
    }
}
