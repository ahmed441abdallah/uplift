'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Experience = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    const isTextInView = useInView(textRef, { once: true });
    const isImageInView = useInView(imageRef, { once: true });
    return (
        <div className='text-primary mt-4'>
            <div className='p-4 sm:p-20'>
                <div className="text-center mb-12">
                    {/* Animate Text */}
                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isTextInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl sm:text-5xl text-center mb-12">
                            Every great design begins with an even better story.
                        </h1>
                    </motion.div>

                    {/* Animate Image */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isImageInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}  // Adds a slight delay to stagger the animations
                    >
                        <Image
                            width={900}
                            height={600}
                            className="w-full"
                            alt="hero"
                            loading="lazy"
                            src="https://bodesstudio.com/wp-content/uploads/2023/05/gjfjbgff46sudfjg-1.jpeg"
                        />
                    </motion.div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-14 gap-8 p-2 sm:p-20'>
                    <div>
                        <p className='leading-7 text-xl text-center sm:text-left'> Our experience includes more than a hundred projects, each with its peculiarity. After all, we do not repeat ourselves; we do not work according to a template, but each time, we develop a new concept for each customer. First, we discussed the interior design of the house that we would like. After receiving all the information, we created a design project. Our team performs the algorithm of actions, avoiding misunderstandings and mistakes. As a result, the customer receives a functional, comfortable, and stylish interior</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 mt-20 gap-4'>
                            <div className='text-center'>
                                <div className='reason_icon'>
                                    <svg className="reason_icon__svg mx-auto mb-2 hover:fill-white duration-300 transition-all" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.242 48H23.7481C21.6538 47.9802 19.5892 47.6932 17.5839 47.139L17.4456 47.9802H2.14365L0 34.2334H1.97572C1.98559 34.0454 2.01523 33.8672 2.04487 33.6891C0.701379 30.621 0.00987858 27.3649 0.00987858 24C0.00987858 10.8371 10.6392 0.118763 23.7481 0C23.8074 0 23.8568 0 23.916 0H23.9753C37.1039 0 47.7925 10.6293 47.9309 23.7526H47.9704L48 24.2771H47.9309C47.7827 37.2915 37.2422 47.8515 24.2519 48H24.242ZM17.9099 45.0804C19.7275 46.6045 21.6637 47.4062 23.6888 47.4458V24.2969H13.257C13.7213 24.9798 13.9979 25.8012 13.9979 26.6821C13.9979 28.2854 13.1089 29.6808 11.795 30.4033H13.425C15.5884 30.4033 17.3567 32.0858 17.495 34.2136H19.6485L17.9099 45.0705V45.0804ZM24.242 24.3068V47.4458C27.7193 47.2874 30.9891 44.8825 33.4785 40.6367C36.037 36.2722 37.4694 30.4825 37.509 24.3068H24.242ZM2.60794 47.426H16.9813L17.327 45.2981L17.2677 45.2487L17.3468 45.1596L19.0163 34.7678H0.642107L2.61782 47.4161L2.60794 47.426ZM38.0523 24.3068C38.0029 30.5814 36.5507 36.4701 33.9428 40.9138C32.1646 43.9522 29.9914 46.08 27.6106 47.1687C38.6944 45.4268 47.2196 35.8565 47.3678 24.3068H38.0523ZM17.6629 46.5946C18.4433 46.8124 19.2435 46.9905 20.0535 47.1291C19.283 46.7629 18.5322 46.2977 17.8111 45.7138L17.6728 46.6045L17.6629 46.5946ZM2.51904 34.2235H16.9516C16.8133 32.4025 15.2822 30.9575 13.425 30.9575H6.03581C4.38609 30.9575 3.00309 32.0957 2.61782 33.6198L2.68697 33.7682L2.57831 33.8177C2.54867 33.9464 2.53879 34.0849 2.52892 34.2235H2.51904ZM0.563079 24.3068C0.602593 27.2759 1.18543 30.1559 2.29183 32.8775C2.91418 31.4326 4.35645 30.4132 6.02593 30.4132H7.72505C6.4112 29.6907 5.52212 28.2953 5.52212 26.692C5.52212 25.8111 5.79872 24.9798 6.26302 24.3068H0.563079ZM6.9644 24.3068C6.4112 24.9501 6.0852 25.7913 6.0852 26.7019C6.0852 28.7406 7.73493 30.3934 9.76991 30.3934C11.8049 30.3934 13.4546 28.7406 13.4546 26.7019C13.4546 25.7913 13.1286 24.96 12.5754 24.3167L12.5557 24.2969C11.8839 23.5151 10.8763 23.0202 9.76991 23.0202C8.75242 23.0202 7.82383 23.4359 7.15209 24.1089V24.2969L6.9644 24.3167V24.3068ZM38.0622 23.7724H47.3776C47.348 20.6845 46.7158 17.7452 45.5995 15.0532L45.5106 14.974C45.5106 14.974 45.4316 14.9146 45.3723 14.8652C45.2538 14.7761 45.0364 14.6177 44.7104 14.4396C44.1276 14.1031 43.0903 13.6082 41.4604 13.1035C40.1959 12.7175 38.4573 12.292 36.1457 11.9357C37.3707 15.4986 38.0424 19.5563 38.0622 23.7823V23.7724ZM24.2519 23.7724H37.5188C37.4892 19.4969 36.8076 15.3996 35.5332 11.8367C32.6586 11.4309 28.9541 11.134 24.2519 11.1241V23.7724ZM12.8224 23.7724H23.6987V11.1241C18.8878 11.134 15.1241 11.4507 12.2297 11.8664C11.0936 15.0631 10.4219 18.6953 10.2836 22.4957C11.2813 22.6144 12.1704 23.0796 12.8323 23.7724H12.8224ZM0.563079 23.7724H6.71743C7.47808 22.9806 8.54497 22.4759 9.7304 22.466C9.8687 18.7249 10.5207 15.1423 11.6073 11.9555C9.4044 12.3019 7.73492 12.7076 6.5001 13.0837C4.85038 13.5885 3.80325 14.0932 3.22042 14.4198C2.96357 14.5682 2.73637 14.7068 2.54867 14.8454C2.47952 14.8948 2.44001 14.9344 2.40049 14.9641L2.3511 15.0037C1.22494 17.7056 0.592715 20.6647 0.563079 23.7625V23.7724ZM35.9284 11.3419C38.4178 11.708 40.275 12.1534 41.6184 12.5691C42.9718 12.9847 44.098 13.4499 44.9772 13.9546C45.0463 13.9942 45.1056 14.0239 45.155 14.0635C41.9049 7.15546 35.3851 2.07835 27.6106 0.851134C29.9914 1.93979 32.1646 4.06763 33.9428 7.10598C34.7034 8.40247 35.3653 9.82763 35.9284 11.3419ZM20.0634 0.870928C12.4075 2.16742 5.9963 7.20495 2.78576 14.0338C2.83515 14.0041 2.89442 13.9744 2.95369 13.9348C3.83289 13.44 4.99856 12.9649 6.34205 12.5493C7.64602 12.1534 9.43404 11.7179 11.8148 11.3518C12.4371 9.64948 13.1879 8.06598 14.0671 6.65072C15.7761 3.87959 17.8308 1.9101 20.0634 0.870928ZM23.6888 0.54433C20.2708 0.623505 17.0208 2.8899 14.5314 6.93773C13.7213 8.24412 13.02 9.69897 12.4371 11.2528C15.3217 10.847 19.0261 10.56 23.6987 10.5402V0.554227L23.6888 0.54433ZM24.242 10.5501C28.8158 10.5501 32.461 10.8371 35.3159 11.2231C34.7923 9.83753 34.1799 8.54103 33.4785 7.3534C30.9891 3.11753 27.7193 0.712577 24.242 0.554227V10.56V10.5501ZM9.78967 43.586C8.41655 43.586 7.30027 42.4676 7.30027 41.092C7.30027 39.7163 8.41655 38.5979 9.78967 38.5979C11.1628 38.5979 12.2791 39.7163 12.2791 41.092C12.2791 42.4676 11.1628 43.586 9.78967 43.586ZM9.78967 39.1423C8.72278 39.1423 7.84359 40.0132 7.84359 41.092C7.84359 42.1707 8.7129 43.0417 9.78967 43.0417C10.8664 43.0417 11.7357 42.1707 11.7357 41.092C11.7357 40.0132 10.8664 39.1423 9.78967 39.1423Z"></path>
                                    </svg>
                                </div>
                                <p className=' leading-8 tracking-wider'>Building design around you</p>
                            </div>
                            <div className='text-center'>
                                <div className='reason_icon'>
                                    <svg className="reason_icon__svg mx-auto mb-2 hover:fill-white duration-300 transition-all" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.4796 29.8392V19.873H46.2878V0H36.9254V1.71216H17.6066V10.5204H9.35258V0H0V28.701H10.5204V48H39.2214V39.2016H48.0297V29.8392H37.4796ZM37.4796 0.554227H45.7336V19.3584H37.4796V0.554227ZM18.1608 2.26639H36.9649V10.5204H18.1608V2.26639ZM36.9649 11.0746V29.8788H28.701V11.0746H36.9649ZM9.39217 11.0746H28.1963V19.3188H9.39217V11.0746ZM28.1963 19.873V38.6771H19.873V19.873H28.1963ZM0.554227 0.554227H8.79835V19.3584H0.554227V0.554227ZM19.3584 47.4458H11.0647V28.701H19.3188L19.3584 47.4458ZM19.3584 28.127H0.554227V19.873H19.3584V28.127ZM38.6474 47.4458H19.8433V39.2016H38.6474V47.4458ZM47.4458 38.6474H28.701V30.3934H47.5052L47.4458 38.6474Z"></path>
                                    </svg>
                                </div>
                                <p className=' leading-8 tracking-wider'>Design only with real materials</p>
                            </div>
                            <div className='text-center'>
                                <div className='reason_icon'>
                                    <svg className="reason_icon__svg mx-auto mb-2 hover:fill-white duration-300 transition-all" width="48" height="28" viewBox="0 0 48 28" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.8816 13.8163C47.8125 13.7275 40.7763 4.7472 31.2237 1.35246L31.0658 1.30312V1.35246V1.30312C28.8011 0.472606 26.412 0.0321512 24 0.000488281C21.5903 0.0194916 19.2012 0.446587 16.9342 1.26365V1.31299V1.26365L16.7763 1.31299C7.23355 4.71759 0.1875 13.688 0.118421 13.8163L0 13.9347L0.128289 14.0926C2.2143 16.5069 4.55335 18.6905 7.10526 20.6058C11.0526 23.5663 17.1711 27.1386 24 27.1386C30.8289 27.1386 36.9572 23.586 40.8947 20.6058C43.4466 18.6905 45.7857 16.5069 47.8717 14.0926L48 13.9347L47.8816 13.8163ZM17.0132 1.81628C19.2532 1.00059 21.6161 0.573403 24 0.55312C26.387 0.574207 28.753 1.00136 30.9967 1.81628C32.441 3.00042 33.5626 4.53038 34.2574 6.26404C34.9521 7.99771 35.1974 9.87883 34.9705 11.7327C34.7436 13.5865 34.0519 15.353 32.9596 16.8679C31.8672 18.3828 30.4097 19.5972 28.7225 20.398C27.0352 21.1989 25.1729 21.5604 23.3086 21.4488C21.4442 21.3373 19.6383 20.7564 18.0586 19.7601C16.4788 18.7638 15.1765 17.3844 14.2726 15.75C13.3686 14.1157 12.8924 12.2793 12.8882 10.4117C12.885 8.76097 13.2542 7.13081 13.9684 5.6426C14.6826 4.15439 15.7234 2.84648 17.0132 1.81628ZM46.9836 14.29C46.6974 14.6058 46.2336 15.109 45.6118 15.7505C44.0355 17.3393 42.3505 18.8166 40.5691 20.1715C36.6908 23.1321 30.7007 26.5959 24 26.5959C17.2993 26.5959 11.3092 23.1025 7.43092 20.1715C5.65048 18.8297 3.9655 17.3656 2.38816 15.79C1.77632 15.1189 1.30263 14.6058 0.986842 14.29L0.671053 13.9248L0.986842 13.54C1.26316 13.2044 1.72697 12.6715 2.35855 12.0005C3.93769 10.3208 5.6362 8.75755 7.44079 7.32286C9.92461 5.31531 12.6702 3.65533 15.602 2.38865C14.0107 4.03543 12.9393 6.11417 12.5215 8.36572C12.1036 10.6173 12.3578 12.942 13.2522 15.0501C14.1466 17.1582 15.6418 18.9564 17.5513 20.2205C19.4608 21.4845 21.7001 22.1586 23.9901 22.1586C26.2801 22.1586 28.5195 21.4845 30.429 20.2205C32.3384 18.9564 33.8336 17.1582 34.7281 15.0501C35.6225 12.942 35.8766 10.6173 35.4588 8.36572C35.0409 6.11417 33.9696 4.03543 32.3783 2.38865C35.3112 3.65313 38.0571 5.31329 40.5395 7.32286C42.3305 8.75903 44.0157 10.3223 45.5822 12.0005C46.2039 12.6617 46.6776 13.2044 46.9539 13.54L47.2796 13.9248L46.9836 14.29ZM24 4.66825C22.8649 4.67215 21.7564 5.01231 20.8145 5.64577C19.8726 6.27923 19.1395 7.17759 18.7079 8.2274C18.2762 9.27721 18.1653 10.4314 18.3891 11.5442C18.6129 12.657 19.1615 13.6786 19.9655 14.4798C20.7695 15.2811 21.7929 15.8261 22.9065 16.0461C24.0201 16.2662 25.1739 16.1513 26.2222 15.716C27.2705 15.2807 28.1663 14.5446 28.7966 13.6005C29.4268 12.6564 29.7632 11.5468 29.7632 10.4117C29.7579 8.88661 29.1484 7.42579 28.0682 6.34926C26.988 5.27272 25.5251 4.66824 24 4.66825ZM24 15.6025C22.9746 15.5966 21.974 15.2872 21.1243 14.7133C20.2745 14.1394 19.6138 13.3267 19.2255 12.3777C18.8372 11.4287 18.7386 10.3859 18.9422 9.38097C19.1458 8.37602 19.6425 7.45388 20.3696 6.73089C21.0967 6.00791 22.0217 5.51646 23.0278 5.31856C24.0339 5.12066 25.076 5.22517 26.0228 5.61891C26.9696 6.01264 27.7785 6.67796 28.3476 7.53093C28.9167 8.38389 29.2204 9.3863 29.2204 10.4117C29.2152 11.7919 28.6625 13.1136 27.6838 14.0868C26.7051 15.06 25.3802 15.6051 24 15.6025Z"></path>
                                    </svg>
                                </div>
                                <p className=' leading-8 tracking-wider'>Remote work around the world</p>
                            </div>
                            <div className='text-center'>
                                <div className='reason_icon'>
                                    <svg className="reason_icon__svg mx-auto mb-2 hover:fill-white duration-300 transition-all" width="47" height="48" viewBox="0 0 47 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M46.006 11.8494V11.6519C46.006 10.6645 46.006 9.67702 46.006 8.76857C46.006 6.22094 44.4034 4.81876 42.8107 4.81876C42.3904 4.80395 41.9722 4.88521 41.5882 5.05635C41.2041 5.22749 40.8644 5.48397 40.5948 5.80621C39.9015 6.66022 39.5492 7.73996 39.6055 8.83769C39.6055 11.5137 39.6055 14.2489 39.5462 16.0856C39.5462 17.073 39.5462 17.9222 39.5462 18.5147V19.0381C39.1331 18.8972 38.6952 18.8434 38.2602 18.8801C37.2379 19.0016 36.2987 19.5021 35.6288 20.2822L33.492 22.5534L33.3832 22.6719C32.0576 24.0839 30.732 25.5059 29.5449 26.7994C28.0731 28.3134 26.7235 29.9412 25.5088 31.6676C24.8878 32.8125 24.5487 34.0886 24.5195 35.3902C24.4745 36.3558 24.5409 37.3232 24.7174 38.2736L23.9952 38.165V37.612L23.2434 36.8616L23.1346 36.7727L21.4825 37.0887C21.8303 35.2355 21.5226 33.3193 20.612 31.6676C19.394 29.9437 18.0446 28.3162 16.5759 26.7994C15.3888 25.5059 14.0632 24.0839 12.7376 22.6719L12.6288 22.5534L10.492 20.2822C9.8197 19.4845 8.86809 18.9725 7.83091 18.8504C7.3959 18.8137 6.958 18.8675 6.54489 19.0084V18.4851C6.54489 17.8926 6.54489 17.0533 6.54489 16.056C6.54489 14.2193 6.48553 11.4841 6.48553 8.80806C6.54187 7.71034 6.18952 6.6306 5.49629 5.77659C5.23681 5.46797 4.91289 5.21969 4.54721 5.04912C4.18154 4.87856 3.78293 4.78982 3.3793 4.78914H3.22102C1.63822 4.86813 0.0158555 6.26044 0.0158555 8.80806C0.0158555 9.71652 0.0158555 10.6743 0.0158555 11.6914V11.8494C0.0158555 14.1304 0.0158555 16.9644 0.0158555 20.2131C0.0158555 20.6279 0.0158555 21.0228 0.0158555 21.4079V21.7338C-0.0439096 23.5766 0.0653631 25.4209 0.342307 27.2438C0.71486 29.2854 1.75926 31.1445 3.31005 32.5266C5.2524 34.58 6.74489 37.0148 7.69242 39.6758L5.51607 40.0905L5.30833 40.1596V47.684V47.9605H40.3969H40.664V41.0483V40.8114L37.9634 40.3769C38.3684 39.3223 38.8308 38.2905 39.3483 37.2862C40.1893 35.5498 41.3087 33.9621 42.6623 32.5859C44.2131 31.2038 45.2575 29.3446 45.6301 27.303C45.907 25.4801 46.0163 23.6358 45.9565 21.793C45.9565 21.3092 45.9565 20.8056 45.9565 20.2724C46.0257 17.0039 46.0159 14.1699 46.006 11.8494ZM11.8275 30.7887V30.7394L11.1251 30.0284C10.6602 29.5544 10.027 28.9027 9.32467 28.1621C7.91588 26.7006 6.59459 25.1575 5.36768 23.5408C4.99616 22.9838 4.85077 22.3065 4.96099 21.6464C5.07121 20.9863 5.42879 20.3927 5.96123 19.986C6.21654 19.7693 6.51239 19.6054 6.83163 19.5037C7.15088 19.402 7.48717 19.3646 7.82102 19.3935C8.70168 19.5207 9.5046 19.9671 10.0765 20.6476L12.2133 22.9286C13.5784 24.3802 14.9436 25.891 16.1703 27.1747C17.6172 28.6578 18.9405 30.2562 20.1273 31.9539C21.007 33.5526 21.2776 35.415 20.889 37.1973L8.29586 39.6067C7.31987 36.8362 5.76925 34.3026 3.74532 32.1712C2.27753 30.8845 1.27898 29.148 0.906178 27.2339C0.641184 25.443 0.538546 23.6319 0.599511 21.8227C0.599511 21.3388 0.599511 20.8352 0.599511 20.2921C0.599511 17.1816 0.599511 14.5057 0.599511 12.1555V11.9482C0.599511 10.8521 0.599511 9.82514 0.599511 8.85744C0.599511 6.65542 1.935 5.4606 3.25069 5.41123C3.58959 5.39552 3.92765 5.45666 4.23948 5.59006C4.55131 5.72345 4.8288 5.92565 5.05112 6.18144C5.64991 6.94074 5.94907 7.8928 5.89198 8.85744C5.89198 11.5334 5.89198 14.2785 5.95134 16.1152C5.95134 17.1027 5.95134 17.9519 5.95134 18.5443V19.3145C5.79905 19.3974 5.65639 19.4967 5.52596 19.6108C4.8833 20.1034 4.4536 20.8226 4.32487 21.6212C4.19613 22.4197 4.37809 23.2372 4.83349 23.9062C6.09607 25.5344 7.46066 27.0812 8.91908 28.5373C9.61155 29.2779 10.2546 29.9395 10.7195 30.4135L11.4713 31.164L11.5505 31.243H11.7879L11.867 31.164V30.7887M8.20682 40.1794L21.067 37.7108H21.1264L22.8971 37.375L23.3819 37.8589V47.4668H5.95134V40.6237L8.19693 40.1893M40.1101 41.3051V47.4668H23.9556V38.718L24.8262 38.8562L40.1101 41.3051ZM34.6395 31.164L35.3913 30.4135C35.8563 29.9395 36.4894 29.2779 37.1918 28.5373C38.612 27.0654 39.9339 25.5018 41.1488 23.8568C41.6042 23.1878 41.7861 22.3704 41.6574 21.5718C41.5286 20.7732 41.099 20.054 40.4563 19.5614C40.3235 19.4475 40.1812 19.3451 40.0309 19.2553V18.495C40.0309 17.9025 40.0309 17.0632 40.0309 16.0658C40.0309 14.2292 40.1002 11.4841 40.1002 8.80806C40.0431 7.84343 40.3422 6.89137 40.941 6.13207C41.1627 5.87817 41.4387 5.67717 41.7486 5.54387C42.0585 5.41057 42.3944 5.34837 42.7316 5.36186C44.0571 5.41123 45.3926 6.60605 45.3926 8.80806C45.3926 9.71652 45.3926 10.6842 45.3926 11.7013V11.9482C45.3926 14.3477 45.3926 17.0632 45.3926 20.2427C45.3926 20.7661 45.3926 21.2302 45.3926 21.7733C45.4533 23.5826 45.3506 25.3936 45.086 27.1845C44.7132 29.0986 43.7146 30.8351 42.2468 32.1218C40.8275 33.5632 39.6605 35.2321 38.7944 37.059C38.2584 38.1136 37.7763 39.1946 37.3501 40.2979L26.7255 38.5995L25.2713 38.3724C25.0814 37.397 25.0083 36.4026 25.0537 35.41C25.0699 34.198 25.3823 33.0082 25.9638 31.944C27.1499 30.2458 28.4733 28.6473 29.9208 27.1648C31.098 25.8613 32.4335 24.4493 33.7591 23.0274L33.8679 22.9187L36.0047 20.6377C36.5766 19.9573 37.3795 19.5108 38.2602 19.3837C38.594 19.3547 38.9303 19.3921 39.2495 19.4938C39.5688 19.5955 39.8646 19.7595 40.1199 19.9761C40.6524 20.3828 41.01 20.9764 41.1202 21.6365C41.2304 22.2966 41.085 22.9739 40.7135 23.531C39.4866 25.1476 38.1653 26.6907 36.7565 28.1522C36.0541 28.8928 35.421 29.5445 34.9561 30.0185L34.2042 30.7789L34.0262 30.9862L34.2042 31.164H34.6395ZM22.9763 0C21.1176 0.00195402 19.3012 0.554037 17.7568 1.58643C16.2124 2.61883 15.0094 4.08518 14.2999 5.80004C13.5904 7.5149 13.4063 9.40125 13.7708 11.2206C14.1354 13.0399 15.0322 14.7104 16.3479 16.021C17.6636 17.3315 19.3391 18.2232 21.1625 18.5832C22.9858 18.9433 24.8752 18.7555 26.5917 18.0437C28.3082 17.3319 29.7747 16.128 30.8057 14.5843C31.8367 13.0405 32.386 11.2263 32.384 9.37091C32.3788 6.88378 31.3853 4.5003 29.6216 2.74347C27.8579 0.986653 25.4679 -5.50007e-06 22.9763 0V0ZM22.9763 18.1987C21.2276 18.1968 19.5187 17.6774 18.0656 16.7062C16.6125 15.735 15.4805 14.3556 14.8127 12.7423C14.1448 11.1291 13.9711 9.35442 14.3134 7.64265C14.6558 5.93087 15.4989 4.35883 16.7361 3.12522C17.9733 1.89162 19.5492 1.05183 21.2645 0.712007C22.9797 0.372183 24.7574 0.547579 26.3729 1.21602C27.9883 1.88447 29.3689 3.01596 30.3403 4.46747C31.3116 5.91898 31.83 7.62536 31.8301 9.37091C31.8145 11.7091 30.8763 13.947 29.219 15.5994C27.5617 17.2519 25.3187 18.1858 22.9763 18.1987ZM26.5771 9.16355C26.2407 8.90204 25.8532 8.71368 25.4395 8.61057C25.0537 8.50195 24.5393 8.39334 23.926 8.28472V5.92471C24.2584 5.9489 24.5889 5.99509 24.9152 6.06295C25.3178 6.14647 25.7094 6.27568 26.0825 6.44806L26.2408 6.51718L26.7156 5.80621L26.5178 5.69759C26.0992 5.50048 25.657 5.35778 25.2021 5.27299C24.7599 5.17375 24.3096 5.11426 23.8567 5.09525V3.99918H22.9565V5.10512C22.2125 5.11036 21.4816 5.3004 20.8296 5.65809C20.5826 5.7923 20.375 5.98868 20.2275 6.22772C20.08 6.46677 19.9977 6.74017 19.9888 7.02078C19.9814 7.22385 20.0213 7.42586 20.1054 7.61092C20.1896 7.79597 20.3155 7.95902 20.4735 8.08722C20.7926 8.35676 21.1676 8.55236 21.5716 8.65995C22.0369 8.7912 22.5092 8.89669 22.9862 8.97593V11.3458C22.5073 11.3192 22.0329 11.2397 21.5716 11.1088C21.1384 10.9921 20.7274 10.8053 20.3548 10.5559L20.2064 10.4571L19.6425 11.1088L19.8107 11.2372C20.2424 11.5444 20.7294 11.7657 21.2451 11.8889C21.8108 12.0399 22.3913 12.1293 22.9763 12.1555V13.2516H23.8765V12.1851C24.4278 12.1718 24.9743 12.0787 25.4989 11.9087C25.9604 11.7926 26.3834 11.5576 26.7255 11.2273C26.984 10.9632 27.1295 10.6091 27.1311 10.2399C27.1328 10.0291 27.0833 9.82111 26.9868 9.63365C26.8904 9.44619 26.7498 9.28488 26.5771 9.16355ZM23.0257 5.92471V8.12672C22.5354 8.0485 22.0568 7.90917 21.6012 7.71199C21.4569 7.64903 21.3309 7.55049 21.2352 7.42563C21.1532 7.31059 21.1115 7.17176 21.1165 7.03065C21.1259 6.87836 21.1757 6.7313 21.2609 6.60461C21.3461 6.47793 21.4636 6.37617 21.6012 6.30981C22.0388 6.07051 22.527 5.9385 23.0257 5.92471ZM25.489 10.9903C25.0098 11.2297 24.4815 11.3547 23.9457 11.3557V9.15367C24.3711 9.23267 24.7273 9.31166 25.0042 9.39066C25.2795 9.46184 25.5383 9.58594 25.766 9.75602C25.8472 9.8168 25.9128 9.8959 25.9575 9.98686C26.0022 10.0778 26.0247 10.1781 26.0232 10.2794C26.0097 10.4359 25.9525 10.5855 25.8581 10.7112C25.7636 10.8369 25.6358 10.9336 25.489 10.9903Z"></path>
                                    </svg>
                                </div>
                                <p className=' leading-8 tracking-wider'>Support projects after  development</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image width={700} height={700} className='w-full' alt='hero2' loading='lazy' src='https://bodesstudio.com/wp-content/uploads/2023/05/asfsadasdaskdjasjddasd123.jpg'></Image>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Experience