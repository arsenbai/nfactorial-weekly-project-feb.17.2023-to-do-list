
export default function Footer() {
    return (
        <div className="d-flex flex-row justify-content-between" style={{
            margin: '42px 80px 42px'
        }}>

            <p style={{
                color: '#081E34',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
            }}>Made with ❤️ at nFactorial in 2023.</p>

            <p style={{
                color: '#081E34',
                opacity: 0.5,
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
            }}>Credits: icons from <a href="https://icons8.com/" target={"_blank"} style={{color: '#081E34'}} >Icons8</a>.</p>

        </div>
    )
}
