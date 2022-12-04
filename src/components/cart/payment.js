import React from 'react'
import './payment.css'

function Payment() {
  return (
    <div className='paymentContainer-pk'>
        <div className='payment-left-div-pk'>
            <div><span className='payment-left-top-heading-pk'>Payment Method</span></div>

            <div className='payment-method-container-pk box-shadow-pk'>
                <div className='payment-method-div-pk'>
                    <div className='payment-method-left-pk'>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk cash-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>cash on</p>
                                <p className='payment-method-text-p-tag-pk'>delivery</p>
                            </span>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk credit-card-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>credit</p>
                                <p className='payment-method-text-p-tag-pk'>card</p>
                            </span>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk debit-card-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>debit</p>
                                <p className='payment-method-text-p-tag-pk'>card</p>
                            </span>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk net-banking-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>net</p>
                                <p className='payment-method-text-p-tag-pk'>banking</p>
                            </span>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk upi-wallet-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>UPI</p>
                                <p className='payment-method-text-p-tag-pk'>and wallet</p>
                            </span>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk giftCards-evouchers-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>GiftCards</p>
                                <p className='payment-method-text-p-tag-pk'>/ eVouchers</p>
                            </span>
                        </div>
                    </div>

                    <div className='payment-method-right-pk'>

                        <div className='cash-payment-option-show-pk'>
                            <div className='cash-payment-option-img-pk'></div>
                            <span className='payment-mode-desc-pk'>
                                <p>If you wish to pay</p>
                                <p>through cash</p>
                            </span>
                            <div className='confirm-order-btn-div-pk'>
                                <button className='cash-confirm-btn-pk'><span>Confirm Order</span></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className='payment-right-div-pk'>
            <div>
                <span className='payment-address-title-pk'>Delivery Address</span>
                <div className='payment-addr-cont-pk box-shadow-pk'>
                    <div className='addr-location-icon-div-pk'>
                        <div className='addr-location-icon-pk'></div>
                        <div className='addr-text-div-pk'>
                            <p className='addr-location-main-pk payment-method-text-p-tag-pk'>Shivaji Nagar, Jhansi</p>
                            <p className='addr-location-sub-pk payment-method-text-p-tag-pk'>c-74, awas vikas, shivaji nagar, Shivaji Nagar, Jhansi</p>
                        </div>
                    </div>
                    <div className='payment-phone-div-pk'>
                        <div className='phone-icon-pk'></div>
                        <span>8948155327</span>
                    </div>
                </div>
                <span className='payment-address-title-pk'>Order Details</span>
                <div className='price-detail-cont-pk box-shadow-pk'>
                    <div className='payment-addr-cont-pk'>
                        <div className='price-details-cont-pk'>
                            <div className='price-text-div-pk'>
                                <span>Sub Total</span>
                                <span>₹ 1457.00</span>
                            </div>
                            <div className='price-text-div-pk'>
                                <span>Discount</span>
                                <span>-</span>
                            </div>
                            <div className='price-text-div-pk'>
                                <span className='tax-charges-cont-pk'>Taxes and Charges
                                    <div>
                                        <div className='tax-details-div-pk'><b>i</b></div>
                                    </div>
                                </span>
                                <span>₹ 107.85</span>
                            </div>
                            <div className='break-line-pk'></div>
                            <div className='price-text-div-pk'>
                                <span>Amount Payable</span>
                                <span>₹ 1564.85</span>
                            </div>
                            <div className='break-line-pk'></div>
                            <p className='payment-mode-note-pk'><span>Note </span>
                                -  This is not an invoice. Invoice will be supplied along with delivery of goods with complete tax categorization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment