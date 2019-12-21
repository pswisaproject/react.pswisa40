import React from 'react';

const TicketSvg = props => (
  <svg viewBox='0 0 512 512' {...props}>
    <circle cx={361.869} cy={412.123} r={19.975} />
    <circle cx={315.921} cy={154.435} r={19.975} />
    <path
      d='M491.711 312.246h19.975V192.393h-50.937c-22.029 0-39.951-17.922-39.951-39.951 0-14.948 8.255-28.532 21.544-35.453l17.013-8.861L408.489 0 .782 192.304l.042.089h-.51v119.853H20.29c22.029 0 39.951 17.922 39.951 39.951s-17.922 39.951-39.951 39.951H.314V512h511.371V392.147H491.71c-22.029 0-39.951-17.922-39.951-39.951 0-22.028 17.922-39.95 39.952-39.95zM272.143 108.484c4.85 9.631 16.505 13.713 26.323 9.095 9.83-4.624 14.117-16.229 9.762-26.115l81.134-38.269 18.505 39.335c-16.998 14.961-27.021 36.606-27.021 59.913 0 14.548 3.928 28.188 10.75 39.951H94.244l177.899-83.91zM471.734 429.57v42.479h-89.889c0-11.032-8.943-19.975-19.975-19.975-11.032 0-19.975 8.943-19.975 19.975H40.265V429.57c34.424-8.892 59.926-40.211 59.926-77.374s-25.503-68.483-59.926-77.374v-42.479h301.629c0 11.032 8.943 19.975 19.975 19.975 11.032 0 19.975-8.943 19.975-19.975h89.889v42.479c-34.424 8.892-59.926 40.211-59.926 77.374.001 37.164 25.503 68.482 59.927 77.374z'
    />
    <circle cx={361.869} cy={292.27} r={19.975} />
    <circle cx={361.869} cy={352.197} r={19.975} />
  </svg>
);

export default TicketSvg;
