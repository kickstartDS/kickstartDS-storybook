import { FC, HTMLAttributes } from "react";
import React from "react";
import classnames from "classnames";

export const AvatarSources: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <>
    <div
      className={classnames(
        className,
        "concierge-avatar concierge-avatar--sources"
      )}
    >
      <svg
        className="concierge-dude"
        viewBox="0 0 315 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 171L59.5556 169.545L64 164.455L54.2222 150.636L32 147V150.636L40 155.727L32 152.818L0 147L1.77778 155.727L40 171Z"
          fill="#ECFF00"
        />
        <rect
          x="121.94"
          y="164.936"
          width="73.7195"
          height="49.2334"
          fill="#ECFF00"
        />
        <path
          d="M124.195 72.7861L141.014 68.3591L151.897 55.4746L187.514 72.3236L200.376 72.7861L194.655 99.8766L181.234 125.646L162.78 130.799L142.649 125.646L130.906 99.8766L124.195 72.7861Z"
          fill="#ECFF00"
        />
        <path
          d="M154.523 87.885C154.954 89.0517 154.915 90.34 154.416 91.4788C153.917 92.6176 152.996 93.5179 151.847 93.99C150.699 94.4622 149.412 94.4694 148.258 94.0101C147.105 93.5508 146.174 92.6609 145.662 91.5278C145.15 90.3946 145.097 89.1068 145.515 87.9354C145.932 86.764 146.786 85.8005 147.899 85.2479C149.011 84.6952 150.294 84.5965 151.477 84.9726C152.661 85.3487 153.652 86.1702 154.243 87.264L150.028 89.5486L154.523 87.885Z"
          fill="#052F3A"
        />
        <ellipse
          cx="1.97329"
          cy="1.97679"
          rx="1.97329"
          ry="1.97679"
          transform="matrix(0.999769 0.0215057 -0.0214296 0.99977 147.611 90.6313)"
          fill="white"
        />
        <path
          d="M180.906 87.885C181.336 89.0517 181.298 90.34 180.799 91.4788C180.3 92.6176 179.379 93.5179 178.23 93.99C177.082 94.4622 175.795 94.4694 174.641 94.0101C173.487 93.5508 172.557 92.6609 172.045 91.5278C171.533 90.3946 171.48 89.1068 171.897 87.9354C172.315 86.764 173.169 85.8005 174.281 85.2479C175.394 84.6952 176.677 84.5965 177.86 84.9726C179.043 85.3487 180.035 86.1702 180.626 87.264L176.411 89.5486L180.906 87.885Z"
          fill="#052F3A"
        />
        <ellipse
          cx="1.97329"
          cy="1.97679"
          rx="1.97329"
          ry="1.97679"
          transform="matrix(0.999769 0.0215057 -0.0214296 0.99977 173.994 90.6313)"
          fill="white"
        />
        <path
          d="M115.036 17.8122L118.993 13.8477L206.969 0L217.503 6.0304L210.014 43.5812L115.036 47.5456V17.8122Z"
          fill="url(#paint0_linear_2030_4133)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M208.291 47.5459L117.27 51.5104L125.185 101.066L139.036 130.8L162.781 136.746L184.547 130.8L200.376 101.066L208.291 47.5459ZM141.254 68.847L124.195 72.7861L130.906 99.8766L142.649 125.646L162.78 130.799L181.234 125.646L194.655 99.8766L200.376 72.7861L187.907 74.3748L151.897 55.4746L141.254 68.847Z"
          fill="#052F3A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M105.397 220H81.6527L87.5889 162.515L73 139L135.5 137.5L149.919 147.648L105.397 157.559V220ZM111.334 162.515L198 140.5L206.312 150.5V220H111.334V162.515ZM142.993 178.373C142.993 182.752 139.45 186.302 135.078 186.302C130.707 186.302 127.163 182.752 127.163 178.373C127.163 173.994 130.707 170.444 135.078 170.444C139.45 170.444 142.993 173.994 142.993 178.373ZM182.567 182.338C186.939 182.338 190.482 178.788 190.482 174.409C190.482 170.03 186.939 166.48 182.567 166.48C178.196 166.48 174.652 170.03 174.652 174.409C174.652 178.788 178.196 182.338 182.567 182.338ZM142.993 204.142C142.993 208.521 139.45 212.071 135.078 212.071C130.707 212.071 127.163 208.521 127.163 204.142C127.163 199.763 130.707 196.213 135.078 196.213C139.45 196.213 142.993 199.763 142.993 204.142ZM182.567 212.071C186.939 212.071 190.482 208.521 190.482 204.142C190.482 199.763 186.939 196.213 182.567 196.213C178.196 196.213 174.653 199.763 174.653 204.142C174.653 208.521 178.196 212.071 182.567 212.071ZM233 163.5L212.249 153.5V220H242L233 163.5Z"
          fill="url(#paint1_linear_2030_4133)"
        />
        <path
          d="M62.6733 220H106L65.5 175L41 177.5L62.6733 220Z"
          fill="url(#paint2_linear_2030_4133)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2030_4133"
            x1="205.265"
            y1="10.522"
            x2="122.793"
            y2="43.5417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#07718B" />
            <stop offset="1" stop-color="#032C36" />
            <stop offset="1" stop-color="#07566B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2030_4133"
            x1="97.5726"
            y1="219.989"
            x2="196.081"
            y2="158.807"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#06566A" />
            <stop offset="1" stop-color="#06708A" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2030_4133"
            x1="106"
            y1="220"
            x2="53"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#174450" />
            <stop offset="1" stop-color="#06708A" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="book"
        viewBox="0 0 214 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M106.5 17.1599L114.5 11.3178L125.242 5.32113L134.031 1.9879L149.535 1.57372L153.283 1.99053L157.593 2.67923L161.904 3.36792L166.142 4.64781L170.38 5.92725L174.388 7.73418L178.396 9.54157L181.66 10.7766L184.925 12.0122L191.218 13.4032L197.511 14.7942L198.261 15.1666L199.011 15.5395L197.137 15.3098L195.262 15.0801L190.952 14.2241L186.642 13.3676L182.484 12.0767L178.326 10.7859L172.492 8.39038L166.658 5.99489L163.156 5.11294L159.655 4.23143L156.015 3.76278L152.376 3.29414H147.099H141.821L138.369 3.74609L134.917 4.19805L132.106 4.99172L129.295 5.78494L134.167 5.58641L139.04 5.38745L144.312 6.10469L149.585 6.8215L152.371 7.49921L155.157 8.17692L163.079 10.5544L171 12.9319L178.699 14.4749L186.398 16.0174L193.829 16.9354L201.26 17.8529L202.048 18.0325L202.837 18.2122L203.056 21.6135L203.276 25.0148L204.971 28.9783L206.665 32.9413L208.208 35.0276L210 37.6597L211 38.1597L212 38.6597L211.874 43.8221L207.878 43.5392L203.883 43.2559L193.201 42.8136L182.519 42.3714L173.523 41.9409L164.527 41.5105L149.722 40.8126L134.917 40.1147L129.857 40.0417L124.797 39.9688L123.11 40.7783L121.424 41.5882L118.987 42.2115L116.551 42.8352L110.929 43.1106L105.306 43.3859L100.407 42.8756L95.5068 42.3656L91.786 41.1758L88.0648 39.986L82.8174 40.0536L77.57 40.1212L63.3269 40.8178L49.0839 41.5145L40.2757 41.9427L31.4675 42.3714L20.9726 42.8198L10.4777 43.2687L6.67184 43.5476L2.86557 43.826L1.89293 42.6863L0.919907 41.5461V40.4081L2 39.1597H3L4.5 38.6597L5.74231 37.1139L7.05716 35.2336L8.37239 33.3529L9.71986 30.7316L11.0673 28.1099L11.8031 25.3187L12.5392 22.5271V20.3859V18.2442L13.3826 18.044L14.2259 17.8441L21.5787 16.9275L28.9311 16.0108L35.6343 14.6822L42.3372 13.3535L46.0853 12.3354L49.8335 11.3178L55.8306 9.52005L61.8277 7.72189L65.1249 7.05164L68.4222 6.3814L72.8087 5.87805L77.1951 5.37427L81.6929 5.5851L86.1908 5.79549L83.3796 4.99215L80.5685 4.18838L76.4778 3.68108L72.3866 3.17335L65.6081 3.42371L58.8291 3.67406L55.4445 4.3487L52.0599 5.02334L48.6978 6.15564L45.3357 7.28795L42.5246 8.54762L39.7135 9.80774L35.1002 11.3779L30.4873 12.9481L25.355 14.0176L20.223 15.0867L18.4242 15.2879L16.6251 15.489L16.8061 15.2773L16.9868 15.0656L22.5405 13.8384L28.0941 12.6113L31.2801 11.6529L34.466 10.695L38.589 8.80676L42.712 6.91856L45.1483 5.99401L47.5846 5.06989L50.7706 4.1998L53.9565 3.33015L56.5802 2.83559L59.2039 2.34147L64.4514 1.7718L69.6988 1.20214L64.343 1.14987L58.9869 1.09805L55.5206 1.55088L52.0543 2.00371L48.3204 3.02973L44.5861 4.05574L39.526 5.61628L34.466 7.17726L29.0312 8.06448L23.5963 8.9517L20.0472 9.2205L16.498 9.4893L16.7064 9.2451L16.9148 9.00089L23.0667 8.1185L29.2186 7.23656L32.3183 6.56718L35.418 5.89782L38.8266 4.59246L42.2356 3.2871L45.0973 2.45215L47.9594 1.61676L51.7076 0.808602L55.4558 0L64.6388 0.0202065L73.8218 0.0404062L78.3196 1.22015L86.5656 3.80671L94.999 7.9718L106.5 17.1599Z"
          fill="#5F97A5"
        />
        <path
          d="M114.506 21.575L122.939 35.63L102.699 40.9006L87.8941 35.63L97.6393 19.3789H107.01L114.506 21.575Z"
          fill="black"
          fill-opacity="0.2"
        />
        <path
          d="M211.032 37.3709H209.914L123.766 32.6597L106.623 37.3709L85.3363 32.6597L4.84741 37.3709H3.34865H1.84952L0.924942 38.5418L0 39.7123V40.948V42.1838L0.978073 43.422L1.95575 44.6597L5.78177 44.3573L9.60739 44.0544L20.1567 43.567L30.706 43.08L39.5599 42.6145L48.4137 42.1495L62.7306 41.393L77.0475 40.6366L82.3222 40.5631L87.5968 40.4897L91.3373 41.7817L95.0774 43.0738L100.003 43.6276L104.928 44.1818L110.579 43.8827L116.231 43.5837L118.68 42.9064L121.129 42.2296L122.824 41.3501L124.519 40.4711L129.606 40.5503L134.692 40.6294L149.574 41.3873L164.456 42.1452L173.498 42.6126L182.54 43.08L193.278 43.5603L204.016 44.0406L208.032 44.3482L212.048 44.6554L213.024 43.4196L214 42.1838V40.948V39.7123L213.075 38.5418L212.15 37.3709H211.032Z"
          fill="#083D4A"
        />
      </svg>
    </div>
  </>
);
