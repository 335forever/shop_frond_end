'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCircleQuestion} from '@fortawesome/free-regular-svg-icons';
import { faLanguage, faChevronDown, faShop } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@/app/ui/dialogs'
import Image from 'next/image';
import Search from '@/app/ui/search';
import React, { useRef } from 'react';

export function MainHeader() {
    const triggerRef1 = useRef<HTMLDivElement>(null);
    const triggerRef2 = useRef<HTMLDivElement>(null);
    return (
        <div className="flex flex-col items-center w-screen h-24 bg-orange-600 fixed">
            <div className="flex justify-between h-10 text-white text-sm w-5/6 max-w-8xl">
                <div className="flex items-center">
                    <div className="px-2 h-full flex justify-center items-center">
                        <span className="hover:text-gray-300">Kênh người bán</span>
                    </div>
                    <div className="border-l border-white-300 px-2 h-full flex justify-center items-center">
                        <span className="hover:text-gray-300">Trở thành người bán TaMo</span>
                    </div>
                    <div className="border-l border-white-300 px-2 h-full flex justify-center items-center">
                        <span className="hover:text-gray-300">Tải ứng dụng</span>
                    </div>
                    <div className="border-l border-white-300 px-2 h-full flex justify-center items-center">
                        <span className="pr-1">Kết nối</span>
                        <FontAwesomeIcon icon={faFacebook} className="w-6 h-full px-1 hover:text-gray-300" />
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-full px-1 hover:text-gray-300" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative px-2 h-full flex justify-center items-center bg-green-500" >
                        <div ref={triggerRef1} className="hover:text-gray-300">
                            <FontAwesomeIcon icon={faBell} className="w-6 px-1" />
                            <span>Thông báo</span>
                        </div>

                        <Dialog triggerNode={triggerRef1.current}>
                            <>                            
                                <div className="flex flex-col items-center pt-10 w-60 h-60">
                                    <Image
                                        src="/images/cute_avatar.jpg"
                                        width={100}
                                        height={100}
                                        className="hidden md:block py-5"
                                        alt="Screenshots of the dashboard project showing desktop version"
                                    />
                                    <p>Đăng nhập để xem thông báo</p>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-1/2 h-8 flex bg-gray-200 items-center justify-center hover:bg-gray-300 hover:text-red-500">Đăng ký</div>
                                    <div className="w-1/2 h-8 flex bg-gray-200 items-center justify-center hover:bg-gray-300 hover:text-red-500">Đăng nhập</div>
                                </div>
                            </>
                        </Dialog>
                    </div>
                    <div className="px-2 flex justify-center items-center hover:text-gray-300 bg-green-500">
                        <FontAwesomeIcon icon={faCircleQuestion} className="w-6 px-1" />
                        <span className="">Hỗ trợ</span>
                    </div>
                    <div className="relative px-2 h-full flex justify-center items-center">
                        <div ref={triggerRef2} className="hover:text-gray-300">
                            <FontAwesomeIcon icon={faLanguage} className="w-7 px-1" />
                            <span>Tiếng Việt</span>
                            <FontAwesomeIcon icon={faChevronDown} className="w-6 px-1" />
                        </div>
                        
                        <Dialog triggerNode={triggerRef2.current}>
                            <div className="flex flex-col w-36">
                                <div className="h-8 pl-2 flex items-center hover:text-red-500">Tiếng Việt</div>
                                <div className="h-8 pl-2 flex items-center hover:text-red-500">English</div>
                            </div>
                        </Dialog>
                    </div>
                    <div className="flex px-3 hover:text-gray-300">
                        <span>Đăng Ký</span>
                    </div>
                    <div className="flex border-l border-white-300 px-3 hover:text-gray-300">
                        <span>Đăng Nhập</span>
                    </div>
                </div>
            </div>
            <div className="flex "> 
                <div className="text-white flex items-center border border-white-500"> 
                    <FontAwesomeIcon icon={faShop} className="h-12 border border-red-500" />
                    <p className="text-5xl pl-2">TaMo</p>             
                </div>
                <div>
                    <Search placeholder="TaMo bao ship 0Đ - Đăng ký ngay!" />
                </div>
                <div></div>
            </div>
        </div>
    );
}
