// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import './Timeline.css';
// import VerticalTimelineElement from './Timelineelement';

// const VerticalTimeline = ({ animate, className, layout, children }) => (
//   <div
//     className={classNames(className, 'vertical-timeline', {
//       'vertical-timeline--animate': animate,
//       'vertical-timeline--two-columns': layout === '2-columns',
//       'vertical-timeline--one-column': layout === '1-column',
//     })}
//   >
//     {children}
//   </div>
// );

// VerticalTimeline.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   className: PropTypes.string,
//   animate: PropTypes.bool,
//   layout: PropTypes.oneOf(['1-column', '2-columns']),
// };

// VerticalTimeline.defaultProps = {
//   children: VerticalTimelineElement,
//   animate: true,
//   className: '',
//   layout: '2-columns',
// };

// export default VerticalTimeline;



// import React from "react";
// import './Timeline.css';
// import 'bootstrap/dist/css/bootstrap.min.css';





// const timeline=()=>{
//     return(
//         <>        
//           <div className="container">
//             <div className="row text-center">
//                 <h1 className="heading-title">Timeline Style</h1>
//             </div>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="main-timeline">
//                         <div className="timeline">
//                             <div className="timeline-content">
//                                 <span className="date">
//                                     <span className="day">10<sup>th</sup></span>
//                                     <span className="month">Apr</span>
//                                     <span className="year">2017</span>
//                                 </span>
//                                 <h2 className="title">Web Design</h2>
//                                 <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
//                             </div>
//                         </div>

//                         <div className="timeline">
//                             <div className="timeline-content">
//                                 <span className="date">
//                                     <span className="day">12<sup>th</sup></span>
//                                     <span className="month">Apr</span>
//                                     <span className="year">2017</span>
//                                 </span>
//                                 <h2 className="title">Web Development</h2>
//                                 <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
//                             </div>
//                         </div>

//                         <div className="timeline">
//                             <div className="timeline-content">
//                                 <span className="date">
//                                     <span className="day">14<sup>th</sup></span>
//                                     <span className="month">Apr</span>
//                                     <span className="year">2017</span>
//                                 </span>
//                                 <h2 className="title">Brand Building</h2>
//                                 <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
//                             </div>
//                         </div>

//                         <div className="timeline">
//                             <div className="timeline-content">
//                                 <span className="date">
//                                     <span className="day">16<sup>th</sup></span>
//                                     <span className="month">Apr</span>
//                                     <span className="year">2017</span>
//                                 </span>
//                                 <h2 className="title">Responsive Design</h2>
//                                 <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
    
//     </>


//     );

// }

// export default timeline;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css';

function timeline() {
  return (
    <>  


<div class="demo">
<div class="container">
    <div class="row text-center">
        <h1 class="white">timeline style</h1>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <div class="timeline-icon"></div>
                    <div class="timeline-content">
                        <span class="date">March 10, 2016</span>
                        <h4 class="title">Web Design</h4>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                        </p>
                    </div>
                </div>

                <div class="timeline">
                    <div class="timeline-icon"></div>
                    <div class="timeline-content right">
                        <span class="date">March 12, 2016</span>
                        <h4 class="title">Web Development</h4>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                        </p>
                    </div>
                </div>

                <div class="timeline">
                    <div class="timeline-icon"></div>
                    <div class="timeline-content">
                        <span class="date">March 14, 2016</span>
                        <h4 class="title">Brand Building</h4>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                        </p>
                    </div>
                </div>

                <div class="timeline">
                    <div class="timeline-icon"></div>
                    <div class="timeline-content right">
                        <span class="date">March 16, 2016</span>
                        <h4 class="title">Responsive Design</h4>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<div id="code-wrapper" class="container-fluid">
<div class="row">
    <div id="ad1_inline" class="col-md-12 text-center ads-728"></div>

    <div class="col-md-6">
        <h3 class="code-heading">HTML</h3>
        <div class="common-height">
            <pre class="brush: html; toolbar: false; stripBrs: true;">
                <div class="main-timeline">
                    <div class="timeline">
                        <div class="timeline-icon"></div>
                        <div class="timeline-content">
                            <span class="date">March 10, 2016</span>
                            <h4 class="title">Web Design</h4>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                            </p>
                        </div>
                    </div>

                    <div class="timeline">
                        <div class="timeline-icon"></div>
                        <div class="timeline-content right">
                            <span class="date">March 12, 2016</span>
                            <h4 class="title">Web Development</h4>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                            </p>
                        </div>
                    </div>

                    <div class="timeline">
                        <div class="timeline-icon"></div>
                        <div class="timeline-content">
                            <span class="date">March 14, 2016</span>
                            <h4 class="title">Brand Building</h4>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                            </p>
                        </div>
                    </div>

                    <div class="timeline">
                        <div class="timeline-icon"></div>
                        <div class="timeline-content right">
                            <span class="date">March 16, 2016</span>
                            <h4 class="title">Responsive Design</h4>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae eleifend ex. Praesent magna justo, bibendum id ante ut, vulputate tincidunt ipsum. Curabitur at rhoncus sem, eu feugiat sapien. Duis in libero cursus, dapibus sem ac, ornare mauris. Cras nunc lectus, porta quis metus vestibulum, pellentesque gravida erat.
                            </p>
                        </div>
                    </div>
                </div>
            </pre>
        </div>
    </div>

    <div class="col-md-6">
        
        <div class="common-height">
         
        </div>
    </div>
</div>
</div>
</>
  );
}
export default timeline;


