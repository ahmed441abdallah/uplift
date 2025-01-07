import React from 'react'

const googleMap = () => {
    return (
        <div suppressHydrationWarning>
            <iframe
                width="100%"
                height="800"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=Sheikh%20Ammar%20Bin%20Humaid%20St%2063/78,%20Ajman,%20United%20Arab%20Emirates+(Uplift%20LLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
        </div>

    )
}

export default googleMap;
