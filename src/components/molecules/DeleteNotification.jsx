import React from "react";


function DeleteNotification() {
    return (
        <div className="w-[344px] h-[80px] bg-primary-50 rounded-lg flex justify-center items-center gap-4 md:w-[496px] md:h-[60px] md:justify-start md:pl-6 lg:w-[590px]">
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12.8571 17.7857C12.8571 17.9036 12.7607 18 12.6429 18H11.3571C11.2393 18 11.1429 17.9036 11.1429 17.7857V10.5C11.1429 10.3821 11.2393 10.2857 11.3571 10.2857H12.6429C12.7607 10.2857 12.8571 10.3821 12.8571 10.5V17.7857ZM12 8.57143C11.6636 8.56456 11.3432 8.42608 11.1077 8.18571C10.8722 7.94534 10.7403 7.62223 10.7403 7.28571C10.7403 6.9492 10.8722 6.62609 11.1077 6.38572C11.3432 6.14534 11.6636 6.00687 12 6C12.3364 6.00687 12.6568 6.14534 12.8923 6.38572C13.1278 6.62609 13.2597 6.9492 13.2597 7.28571C13.2597 7.62223 13.1278 7.94534 12.8923 8.18571C12.6568 8.42608 12.3364 8.56456 12 8.57143Z" fill="#0F27BD" />
                </svg>
            </span>
            <p className="w-[256px] h-12 font-medium text-base text-neutral-800 font-campton md:w-[337px] md:h-[24px] lg:w-[380px]">An item has been deleted from your wishlist</p>
        </div>
    );
}

export default DeleteNotification;
