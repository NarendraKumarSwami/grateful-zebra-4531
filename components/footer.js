function footer(){
    return `<div id="footer">
    <div id="havequestion">
        <p id="havequews">Have a question? Check out our FAQs page or chat with us on Facebook or WhatsApp.</p>
        <div id="fbbtn">
            <img id="fbimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImj5adg1sNvD0iCEQcjIGr-CZGuiX1or61w&usqp=CAU" alt="">
            <p id="chatid">CHAT WITH US</p>  
        </div>
        <div id="wtbtn">
            <img id="wtimg" src="https://cdn.usbrandcolors.com/images/logos/whatsapp-logo.svg" alt="">
            <p id="chatid">CHAT WITH US</p>  
        </div>
    </div>

    <div id="bigdiv">
        <div id="innerdiv">
        <div id="Div1">
        <div id="Kettodiv">
            <img id="kettoimg" src="https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=1.0" alt="">
            <!-- <div id="line"></div> -->
            <div id="socialhandles">
                <img src="data:image/png;base64,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" alt="">
                <img src="data:image/png;base64,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" alt="">
                <img src="data:image/png;base64,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" alt="">
                <img src="data:image/png;base64,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" alt="">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBUQERAWERUVFRcYEBcVEhAVFxcVFhYYFhUVFRUZHSggGBolGxcXIz0hJSkrLi4wFyAzODMtNyguLisBCgoKDg0OGxAQGy0lHyUtKys1Ky0tLy0vKy0rLS0tLS0vLS0tLS0tLS0tLy0tKy0tLS0tLS0tLystLS4tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABJEAABAwECCQQNCQgDAQAAAAABAAIDEQQxBQYHEiFBUWGRInGBoRMyNFJicnOCkrGzwdEUIyRCU1STssIVFhczRKLS8EPh4mP/xAAbAQACAwEBAQAAAAAAAAAAAAAABQMEBgIBB//EADsRAAECAwIKBwcFAQEBAAAAAAEAAgMEEQUhEjFBUXGBkaHB0SIyUmGx4fAGExQVIzSSQnKCovFiMyT/2gAMAwEAAhEDEQA/ALxREQhEXlNI1jS5zg1oBLiSAABpJJNwVc40ZQySYrHyRcZXC/ybTcPCPC4qzKykWZdgwxpOQaeWPMF01hcblOsJ4Zs1lbnTzNj2Amrj4rByndAUOwllMjGizwF/hSODBzhoqSOchVtPO6Rxe9xe49s5xLnHnJ0ldFpJexIDL4lXHYNgv2nUphBGVSm14/4RkukbFujjb635xWsmxlt777VN5sr2/lIWpRMWS0FnVY0ah4qQQxmWwdhy2G+1TnnnmP6l5OwnaTfPKeeWQ+9Yi4U2CMylbDGZe7rZKb5Hnz3fFeZmf37vSK81wigzKw1q7GR3fHiVwXnaeJXC4QrDWrnOO08Vxnu2niUXCFM1q79mftd6RXb5XL9o70nfFeS4RQKQNGZZDcIzi6Z45nv+K92YetgutUo5ppB71rkXmC04wF37phxtGxbZmNOEG/1U3TLIfW4rY2bH7CcZ/nBw2PY1w4gA9ai6Lh8tBf1mNOkDlVBl4RxtGwclY2DcqT6gWiztI1ujcW0HiOJrxCmeBca7Fa6COUNcbmScl9dgFzj4pKoZASLjRUI9iy0TqgtPdyPAhVYtlwH9Xonuv3HmvpdFTWK+P9osxEc5M8e0mr2jwXHthuO6hCtfBeEobVGJYnh7TxB1tcNR3FZuckIsqeleMhGLyOnVVJZmUiQD0hdnyLOREVJVUREQhF5yyBgLnENABLiSAABpJJ1BeirbKhjCR9BidTQHWgg7dLYunQ47s3aVYlZZ0xFENus5hn9ZV3Dhl7sELR47Y3PtjjFES2Bp0DSDKR9Z27Y3pOmgbFF1Sq3EGEyCwQ4YoB6rpTNsENFAuyVW1xexftFukzYm0aO3e6oY0bzrPgjTzDSrTwFiTY7IA4s7M8fXkAND4Dbm9Z3qrN2jBlrnXuzDjm8ctKKKK9kO448yqiwYEtdp0xWeR4Nzgwhh880b1rd2bJ5hF4q5kce58rf0ByuREliW7GPUaBv5eCrGZdkAVTsyZ2w9tLAOZ8rv0Be7cl8+u0xjzXn4K0UUBtmbOIgagvPiYnoKsP4Wyfe2/hu/yXIyWP8AvY/Cd/mrORc/OJztD8W8l78XGz7hyVZfwrd97H4J/wA0/hW/74Pwf/as1EfOJvtD8W8l18ZH7W4clWP8K3/fB+D/AOk/hU772Pwf/Ss5EfN5vtD8W8l78dMdrcOSrH+FTvvY/CP+S6nJXJ96b+GfirQRHzeb7X9W8l78wmO1ubyVVnJXNqtLDziQLxfkuteqaE87pG/oKtpF6LZmxlGwLsWlMZxsHJU7Nkzt7bjC/wAV7v1ALS23FHCMP8yyvI2sGeBzlpNFfiKZluxx1g07Rx4KRlqxhjAPrSvmh7SLxRcL6Awxi7ZbYCJoml2p4oHjZy7+g1Cq7G3Eaax1liJlh1mnKb4wFw3jRtom8pa0GOcE9F2Y8D/iaS1pQoxwT0T38/8AFEFuMW8YZrBKJIzVpoHtJOaW6wRqI00OriDp1wmT2Ne0tcKg5EwfDD2lrhUFfQ+BsKxWyFs0RqDeDe1wva4aiP8Au4rZKkMQsYzYrQGvd81KQx41N71/Rr3V3K71irQkjKxcEdU3jlpHmspOypl4mDkOI+so5IiIqKprBwxb22aCSd10bC6m0/VaN5NB0qgLXaXSyOleave4l53uNTTduVnZWsIZlnjgB/mPJd4jANB85wPmqq1p7FghkExMrvAedapvIQfp4Zy+A86rlbTFzAslttDYW6BfI6lcxgvdz6gNpG9apXJk5wMLNYxIR85NR7tzKfNt4GvO8q5Pznw8EuGM3DTn1Y9NFNNP9zDrlyKQ4KwdFZYmwxNzWNGjaTrc46ydqzkRY0kk1ONIq1vKIiLxCIiIQiIiEIiIhCIiIQiIiEIiIhCLWvw5Y2nNNrhDheDNECOfToVYY+42yTyOs8LyIWktOaadkI5LiSLxWtBcb9lITnHaU8lrGw2B0R1K5BxTqXscvYHRHUrkp4r6Shma8BzXBwNxBBB5iF2ewOFCKg3gqhMXcYrRYpA6N5c0n5xji4tcNdW7d946leWDbYyeJkzDVr2hwurp1HeLlRnpB0qRfUHLwPBUp2RdLEVNWnLwKqjKJir8leJ4W/MvPKA+o7Sc3xTq5iNlYUvorC2D22mCSF9z2kcx+q4bwaHoXz7brM6KV8TxQte4O52mh6wn9kzpjwy1/WbvGTZiKd2XNGNDLXdZu8eWI6ljhXVk4wx8qsTWk1fDRh2ltOQ7hUeaVSimuSu39ithiJ5MrXCmqoo5p4NI85SWrBEWWdnb0hqx7qqS04AiS5OVt/PcrkREWOWTVPZV7TnW5rK6I42Cm9xc49RbwUNW/wAoEmdhKY+G0ei1rfco+thKdGAwdw8FrJWFSCzQN96y8EWTs88cPfva3RqDnhpPQDVfQsbA0AAUAFANgFypDJ7Hn4ShB1F59GNxHWArzSe2YhL2NzCu0+QSm17ojW91dppwCIiJOlKIiIQiIiEIij2MGNllsXJe7Ok1RsIJ87U0c+nYCq7wxlCtk9RERZ26sztqb3nTXe0BXIEjGjXgUGc+qnYr8tZ0eOKtFBnN2zKdit+adkYznuDBtcQBxK18uMVhbfa4eiVh9RVD2m1SSOznve9xvLnuceJXlnHb1q+2yG/qedQTNlgtp0n7B5q+24y2A/1cPTI0etZllt8Mv8uWOTxHsd6ivnep2rlshBqCQRcar02QzI87P8XRsFmR52eYX0miozBOOlvs50TGRveyZzxzVdpA5iFPsX8oFltFGTfR3nWSMwnxr29OjeVRjWfGhiovHdyxpdMWTMQRhAYQ7uWPh3qarHtmd2N+b22a7N56aF7grlUUsXzS/tjzlcKX4+YryWWZ00bSYXuJbQaGF5JLXUuFTo3U1qI0OxbaFHbFaHtxH1Rb2DEbHYIjMR9UXUq7smpd+zoq3Vfm82effVVPgHAk9tlbHE2t2edOaG9846vfqV64JsLLNAyBl0bQ0bTtcd5NT0pVbMdvuxCy1roFD41Sa24rQxsLLWui4+Nblmql8qNg7Fbi8XSsa7dXlNPW2vSroVZZY4O530vz2k82aR6yqFkxC2ZAzgjjwS6yHETQGcEbq8FWi2WLlq7DaoJa0pI0nxc9ud1VWtXZl45wtWaOBact21awww4Fpy3bV9LIoz+83Miw3uHrB+5fmVUY4PzrfaD/APZ49Fxb7lqFtcaj9OtPl5fauWrWkhROg3QPALbwWfTboHgpbkujrb2nvWPPVT3q5lUWSZlbY7dC/wDMwe9W6ktouwo2oLN2z9zTuCIiKilKIiIQirfHTHzNLrPY3VNz5RwIjP6uG1dspGNRZWxQuoSPn3A3A/UB36+em1VeU1kpQGkSJqHErS2TZIc0R4w7wOJ4DWV3e8uJJdnEmpJ0kk3klcIvSCzvkcGsaXEmjWtBJJ2ADSU3MRaTAXmlVN8E5N7VKA6Z4gBvaeU70RoHGu5SaLJpYh2z5XHXQxtHDNr1qo+0ILTStdAS2LaspDNMKugV34t6qKqK4X5N7AbjK3mdEfWwrR4SyYPFTBO12wSNzTxFQT0BeNtGCTStNK4h2xJvNMIjSOIqNtyrhFn4UwTaLK/Mmjew6qt0He1w0EbwVgK42ICKhNG0cA5pqM4UvxRx1msZEctZYe9rV7d7CdW67mVt2G1xzsEkbw9jhVrh/ug6qHSF86qV4jY0OsUuY8kwyHlDSaG7PaNu2l45gl87JiJV7Ot4+fiktp2UIoMWEOlm7Xnmz6VdD2BwoRUG8G4haeTFXB7jnGyx13NzR6IoFt4pA4BwIIIqCDUEG4gr0SVr3N6ppoWTZEezqkjRcsayWSOFubGxsbdjGho56DWslEXK5qTjRQHK6z6NEdkhHFh+Cnyg2VruNnlf0PVuRNJhmlXrN+6h6VUK5CItbhLbUW+/be/1otCir/Dw8yrfBQsy2+M/dto8tJ7Ry1lFtMZR9Mn8tJ7Ry1tEohxOg3QFZhN+m3QFN8kfdcnkH/niVsqpskndcnkH+0jVspdNOwopOjwWStwf/WdARERV0oRaXGrDAsVmfLoz+1iB1vN3QKE9C3SqbKthPsloZZwdETeWPDcM48/JzetSwWYbwDiTCy5T4qZaw4hedA5mgUHmkc9xc4l2cSXEmpJOkknaui5XaOMuIAFSTQACpJNwATv3i+hBqzsBYFltsoiibWul7jXNA1lx2aVc2L2LdnsLKRtq+nLkIGcbqgd63cOs6V0xSwE2w2cMoOyOo6Y6NLqaG11ht3E61IEpmZgxTQdXxWGta1HTLzDhn6Y/t3nuzDWb0REVVJkREQhYeEcHQ2lhjljEjTqOo7Qbwd4VQY54oyWF3ZGEyQk0YTe06dDqa9+tXWsTCFkjnjdFI3OY8UcDsOzYRfXVRWJeYdBN2LMmFn2hElH3XtOMcRmPor51XC2+MmCH2O0viOkA1a7a06Q7h6iFqU8bFDhULesLXtDmmoN4VrZMMPmaL5LIaujFYydbKirfNJHQ4bFP18/YtYSNltUUwuaW59NbSaOHAlX+1wIqNIKTz0LAiVGI368qxluSggx8NuJ9+sY+B1rsiIqaSooRlZ7hZ5YfkkU3UKysdws8u32cisShpHZpV6zPu4elU8iLstRhLeUXVcrlF7hIotvjGPpk/lpPaOWuotnjEPplo8rJ7Ry19FlmxaAIhjoDQFM8k3dcnkHe0jVsKqclHdcnkHe0jVrKF7sJxPrEsdb33f8AEIiIuUmRfPmHLX2e0yy17aRxHMXmg4UV84QfmwyO2MceDSV89EaTzlTwXYJJWr9mIY+q/wDaNtSfALpRSvJrg0T24PdpELS67RnNLQzpqQehRaisnJBFybQ7wmAf3E+scFLEi9EhO7WiGFJRHNx0p+RA8CrHREVNfOUREQhEREIRERCFX2VjBjXQstIHKY7NJ8EgubXcHD+9VYr0x5iz8HzjwQeD2u9yoxMpSIcCi3Hs/FL5TBP6XEarj4krgHWr4xOtXZbDA835gaa31YSyp9FUOrkyXyZ2DwO9kcOprveicILAe9R+0UMGVa7M4bwfJTBERLVi0UKysdwt8s32cimqhWVjuFvlh7OVTS//ALM0q/ZX3kPSqgCIuVosJfQMFcIuUXuEii3eHm/SpvKye0K19FtMPN+lT+Wf+dywM1YwRlxD6o0BS/JX3XJ5B3tI1aiq3Jb3W/yL/wA8StJTQ3YQqsbb/wB3/EIiIpElWLhBmdDI3axw4tIXz64aV9GKg8N2MQWiWEDQ2R4FdgcaH1HpXLn4K1fsxEH1WftPiD4ha0hWRkhk5NoZvY4f3g+ocVXhCk2TvCAgtrWuulBj3VJaW084AdK897VPLWhGLJRGjHSv4kHgrjREXa+cIiIhCIiIQiIiEKP49S5mDpyO9AHnOaFRqtHKvhENijs4NS52e4eCAWiu4kn0FV1FZgOoFu/Z2CWSeEf1EnVcBvBXVXJkvjzcHg99I49TW+5U8BqV7Yn2XsVhgYb+xhxr4ZLyD6S7mH1aAo/aR4bKtbncNwPkt2iIqaxCKFZV+4W+XHs5FNVCsq/cTfLN9nIpIJ+o3SPFMLK+9hfuVQLlETzCX0TBRFwiMJFFJcPt+lT+Wk/O5YGatrjA36XP5aX2jlr81YN0WhKqMPRGgKVZMe63+Qd7SNWeq0yaClrf5F3541ZaZyhrDr3rIW993/EIiIrKSoqtymYMzLQ2cDRK2h8dooearczgVaS0+MuCha7M+LRnDlRE6ntu6CCW8zio4rS5t2NMbLmxKzLXu6puOg8rjqVJlq4FRpBoRcRoIOog7V7ywlpLSKEEhwN4INCDvBXUtS8RV9CDlcOKeG222AOJBkbRsw0X07YDvXX8RqW/VF4HwnNZJBLGaEaCDc5p0lrhrCtjAGMUFtbyDmvpymOIzhvHfDeOmlyuwYwdccaw9rWU6XcYsIVhn+vce7MdRvW8REU6SIiIhCLEwhbI7PE6WQ5rGCrj6gNpJoKayV1wlhKKzMMksgY0bbydjR9Y7gqlxuxnfbnZjQWRNNWNrQkivKfTRnbrhvvXhcAmdm2ZEnH5mDG7gM58MenVYw4VfbLQ6d2gE8gVrmsGgDh6yda1lF6ELghdtevoTGNY0NaKAXALPxbwabVaoohpDnNztzRpceAPTRX2AAKDQoNkzwF2GM2qQUfKKRgi6M0JPnEcANqnaHOwlh/aCcEeY923Ey7WcfAakREXKRIoVlX7hb5Zvs5FNVCsq/cTfLN9nIuodzwe8eKY2R99C/cqhCLhdk0wl9Ioi4XK4XWGiil+HmfSp/LSe0csDNW3xhjpapvKvPE1961uavncSJR7h3nxSmE6sNp7h4KSZOBS1v8AJO/Mw+5WUq0xC0WznY8eo+5WWnlmuwoGsrK2591/EcURETBJkREQhQXHvFzOraom6afPNGsD/kG8C/dp21gDmK+VBsZ8Tw4mazNv0vjGjnLP8eGxLpuXdX3jNY4haayLWDWiBGOg8DwOa4qvSxIyWkOaS0jSCCQQdoI0grJdGQSCKEGhB0EEXgjUuhYloirTYakeC8erVEM2UNnA21a/07uIJ3rfwZQrKRy4pWnXQRuHEuB6lXhYupYrTJuIMqXxbJk4pqWUPdUbhduVkvyg2Mf8cx82KnW9aXCOUSVwIghEe95Lz0AUAPFQ4sXUsUvxbzlXkOxpJhrgV0kndi2rthG3T2l+fLI553uu3NFwG4ABYhasgtXQsXoips2jRQYswXgWqR4mYsOtkue8EQsPLN2cb8xp9Z1DeQsrFjE6S1ESSVjhBrW5zxsYNnhXbK6rSslljhY2ONoY1oo1ouAVuEC6/IkdrWyIDTCgmr8pH6fPwy3r0jYGgACgAoANAAFwAXoiKwsUiIiEIoTlYP0Jo/8As32cnxU2UDytSUs0Y2yE8GH4r1vWCZ2KKz8LTwKqdcojb1cwl9KoiKS/u3uPWuVx8Q1U/joGdb3G2Kltl52nixpWozVKse7PS0NfqcwcQSD1UUbzVgZ3oTEQf9HffxSSTiYUuw/8gbBTgtlig7NtkZ2lwPSxwHXRWeqlsMnYpWSd45ruBBorYa4EVGkG5OrEiB0NzcoNdo8kltxv1GPzimw14rsiInSRoiIhCIiIQtNhjAFntQq9ua/U9tA7p1OHP1KG4SxMtMVSykzdre26WH3Eqy0VWNJwot5FDnHqm5MJW05iXGC01GY37Mo2qlbRZXsOa9hadjmlp4FeRjV1yxtcKOaHDYQCOtYb8D2Q32aL8Ng9QVJ1mOHVdtCbw/aBn62EaDXkqeMa69jJNAKk3DXwVwtwHYx/TR9LGn1rKs1ljjHIjazxWtb6l02z35XBdO9oYY6rCdYHNVXYMUrZMadiMbdZkq0cDyj0BTDAmJVmho+UdneLs4DMB3M19NeYKWIrkOVYzHfpSyZtmZjDBBwR3c8eyg7kREVlKUREQhEREIRVrlglH0dlftCRz5oHqKspU7lPtvZLcWC6NjWbq6XH81OheE0Tz2dhl88HdkOO7B4qGrvCOUOdcELYYvWUS2uGMiudIwHmLhXqqu/eXVX0Fzwxpccl+y9XX+xWLlbZFFgr5T8XFzqNY6WTPiY8fUdQ+K/R6w3ioVmq0rXZxJG6N1zgRzbD0KuLRZ3McWOFC0mvOFmLdg4EVsUYnCmseVKaE7smPWEYZxjwPmsXMU9xWtvZbOGk8qPknxfqHho6CoRmrNwTbHQSh7dIueNrdYVGzZwS8bCd1TceerwqrM9A9/CwRjxjT54tisZFj2a0MlaHsNQf9odhWQtuCCKjEsqQQaFERF6vEREQhEREIRERCEREQhEREIRERCEREQhERdHvDQSTQDSSdAA3oQsTCtuZZ4XzPuY0mm0/Vbzk0HSqEt07ppHSuNS9xc47yanrKl2PeM3yt/YYj8yw39++7O5hpA5ydlIeQqb4wc65b2wrPMrBL4nWdkzDINOU6sy8iFMMl+DzJa+yU0RMcd2cRmgHiT5qieargyd4I+TWNryKPmo87Q2nIbwqfOUkN2EaKe3JoQJN2d3RGvHuqpYiIrC+dooxjTgyvz7BdokG7U73cNik66kA6DpVablmzEIw3ZcuY5D6x4lNAjOgxA8KtM1ds1bvDeBzES9grGb/AAdx3b/9OpzVgZmBEl4hhxBeN/eM4PkbwVpocZsRuE3EvfB1vks7qsuPbNOv/vepXYcMwzaK5jtjj77iocGrkNVqTtaNK9EXtzHgcnh3VVaYlYca83HOPXn3qxEUGgtcsfaSOaOf46FmRYdtA7Yh3mj3UT6H7RSx67XN2EeNdyWPs54xEHcpaijP7wTd4z+7/JdxjC/vG8XKcW7JH9R/E8lGZCN3bVI0Ud/eJ/2XWU/eM/Zf3H4L0W7I9s/i7kvPgY2beFIkUcOMjvsh6R+C6nGZ32Q9I/BdfO5Htn8XckfAx828c1JUUXOND/sm+kfguhxpk+ybxKPnUn2/6u5LsWdMHINoUrRRA42yfZN4uXmcb5fsmcXLr5xKdo/i7kuhZcycg2hTNFCDjnN9kz+/4rxdjradUcQ52yH1OXvzaV7R2HkuxZEycg2hT1FXFpxzthuzG+Kz/Ilam24etkvbTuI1gHMHSGUBXhtWDkBO7jwViHYUdx6TmjaeHFWRhXDtmsoPZZRnd42jnnzdXOaBV1jPjbLa6xx/Nw7K8p/jnZ4I0c+haR9SvFwVV88+LdiHrL/ifSNkQJZ2H1nZzk0DJrr3LHcF5uC93BbDF/AMttlEcYo0aZHkaGt27zsbr5qkDHEmgTl0VrGl7jQDGTkWViRi/wDLJw5w+ajIdIe+1tj6de6u0K5lr8FYNissTYYxRrbyaVc7W5x1k/7oWwTiFDwG3418/tS0DORsIXNFwHE955DIiIilS1EREIXVwBFDpGtR/COARpdF0tP6T7ipEiqzUnCmWYMQaDlGg+gcqlgxnwjVp81AXxFpo4EEXilCgaptPZ2SCj2h3Pf0G8LWz4AYe0cW9ay0z7Px2XwSHDNiPLeNCaQ7QY7rXevWRRwNXYNW0kwJKLgHdPxovE4OmF8bugV9SURJCbhmjoTvxJG0VG9TiYhuxOG1YYau2asn5FKPqO4FcfJ3d6oDAjDGx34le+8GdY2auC1ZXYHd6upiOz1rnAf2TsQHhYpavNzVlmE7PWujoXd6umsfmOxdteFhuavJzVmuhd3q8nQO71Shj+ydhUzXjOsJzV4Oas91lf3jvRXm6xy9470Spmw39k7Cp2vGda57V4vC2LrDL9k70T8F5nBs5uhefMf8FO2HE7J2HkrDYgzrWPC8Xhbf9jWk/wBPL+G8dZC9YsU7a/8A4s0bXOYOqtepWocCM7Ex2w8lJ8TCZ1nAawo44LycKqeWPEN1azTgbRGCSfOdSnAqSYMxestmoWRguH138p3OCdDegBNIFnR3dbo6b9w5qtGtyWhDo1ce64bTwBUDxfxKntBD5gYY945bh4LTdzngVY2DcHw2aMRwsDGjiTrLjrO8rOROoEuyELsedZqdtKNNmj7mjE0YvM6dVEREU6oIiIhC/9k=" alt="">
                <img src="data:image/jpeg;base64,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" alt="">
            </div>
            <div id="div3">
                <p id="follerssize">1.5M +</p>
                <p id="follerssize2">Followers</p>
            </div>
            <div id="div4">
                <p>For any queries</p>
                <p>Email:info@ketto.org</p>
                <p>Contact No:+919930088522</p>
            </div>
        </div>
    </div>
    <div id="Div2">
        <div id="causesdiv">
            <h2>Causes</h2>
        </div>
        <div id="li">
             <p>Medical crowdfunding</p>
             <p>Cancer Crowdfunding</p>
             <p>Education Crowdfunding</p>
             <p>Creative Fundraising</p>
             <p>Child Welfare</p>
             <p>Animal Fundraisers</p>
             <p>COVID-19 Relief Fund</p>
        </div>
            
    </div>


    <div id="Div3">
        <div id="causesdiv">
            <h2>How it works?</h2>
        </div>
        <div id="li">
             <p>Fundraising for NGOs</p>
             <p>Sponsor A Child</p>
             <p>Fundraising Tips</p>
             <p>What is Crowdfunding?</p>
             <p>Corporates</p>
             <p>Withdraw Funds</p>
             <p>Browse Fundraiser</p>
        </div>


    </div>
    <div id="Div4">
        <div id="causesdiv">
            <h2>About Us</h2>
        </div>
        <div id="li">
             <p>Team Ketto</p>
             <p>In The News</p>
             <p>Our Partners</p>
             <p>Careers</p>
             <p>Ketto Blog</p>
             <p>Success Stories</p>
        </div>
    </div>
    <div id="Div5">
        <div id="causesdiv">
            <h2>Support</h2>
        </div>
        <div id="li">
             <p>Medical Finance</p>
             <p>FAQs & Help Center</p>
             <p>Are Ketto Campaigns Genuine?</p>
             <p>Fundraiser Video</p>
             <p>Trust & Safety</p>
             <p>Plans & Pricing</p>
             <p>Contact Us</p>
        </div>
    </div>

    
    </div>


    <div>
        <div id="paymentlogos">
            <img id="paymentlogo" src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.5" alt="">  
    
       </div>
       <hr>
       <div id="copywrite">
        <p>Copyright © 2022 Ketto Online Ventures Pvt Ltd. All Rights Reserved. Terms of Use | Privacy Policy |AML Policy | Use of cookies </p>

       </div>
    </div>
</div>
<div id="knowmore">
    <p>Know more about Ketto Crowdfunding Platform</p>
</div>

<div id="lform">
    <div id="lstart">
        <p>START YOUR MEDICAL FUNDRAISER RIGHT AWAY</p>
    </div>
    <div id="form">
        <input type="text" placeholder="How much do you want to raise?">
        <input type="text" placeholder="Patient's full name">
        <input type="text" placeholder="The Patient is my...">
        <img id="arrowbtn" src="https://cdn-icons-png.flaticon.com/512/56/56814.png" alt="">
    </div>
</div>
</div>`
}

export {footer}