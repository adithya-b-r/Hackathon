import React, { useState, useMemo } from 'react'

const bankLoanData = {
    "loans_by_type": {
        "Kisan Credit Card (KCC)": [
            {
                "loan_name": "SBI Kisan Credit Card",
                "eligibility": "Farmers engaged in crop production and allied activities",
                "bank_name": "State Bank of India",
                "rate_of_interest": "7% per annum",
                "image": "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
            },
            {
                "loan_name": "PNB Kisan Credit Card",
                "eligibility": "Individual farmers, joint liability groups, self-help groups",
                "bank_name": "Punjab National Bank",
                "rate_of_interest": "7.5% per annum",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Punjab_National_Bank_new_logo.svg/2560px-Punjab_National_Bank_new_logo.svg.png"
            },
            {
                "loan_name": "ICICI Kisan Credit Card",
                "eligibility": "Farmers with a minimum landholding of 2 acres",
                "bank_name": "ICICI Bank",
                "rate_of_interest": "8% per annum",
                "image": "https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg"
            }
        ],
        "Crop Loan": [
            {
                "loan_name": "SBI Crop Loan",
                "eligibility": "Farmers engaged in seasonal crop production",
                "bank_name": "State Bank of India",
                "rate_of_interest": "7.5% per annum",
                "image": "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
            },
            {
                "loan_name": "HDFC Crop Loan",
                "eligibility": "Farmers owning agricultural land",
                "bank_name": "HDFC Bank",
                "rate_of_interest": "7.25% per annum",
                "image": "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg"
            },
            {
                "loan_name": "Axis Bank Crop Loan",
                "eligibility": "Small and marginal farmers",
                "bank_name": "Axis Bank",
                "rate_of_interest": "7.75% per annum",
                "image": "https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png"
            }
        ],
        "Tractor Loan": [
            {
                "loan_name": "SBI Tractor Loan",
                "eligibility": "Farmers engaged in commercial farming",
                "bank_name": "State Bank of India",
                "rate_of_interest": "9% per annum",
                "image": "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
            },
            {
                "loan_name": "ICICI Tractor Loan",
                "eligibility": "Farmers with at least 5 acres of land",
                "bank_name": "ICICI Bank",
                "rate_of_interest": "9.5% per annum",
                "image": "https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg"
            }
        ],
        "Dairy Loan": [
            {
                "loan_name": "PNB Dairy Loan",
                "eligibility": "Farmers involved in dairy farming",
                "bank_name": "Punjab National Bank",
                "rate_of_interest": "8.5% per annum",
                "image": "https://cdn.freelogovectors.net/wp-content/uploads/2023/01/punjab-national-bank-logo-pnb-freelogovectors.net_.png"
            },
            {
                "loan_name": "HDFC Dairy Loan",
                "eligibility": "Entrepreneurs and dairy cooperatives",
                "bank_name": "HDFC Bank",
                "rate_of_interest": "9% per annum",
                "image": "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg"
            }
        ]
    },
    "loans_by_bank": {
        "State Bank of India": [
            {
                "loan_name": "SBI Kisan Credit Card",
                "eligibility": "Farmers engaged in crop production and allied activities",
                "rate_of_interest": "7% per annum",
                "image": "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
            },
            {
                "loan_name": "SBI Crop Loan",
                "eligibility": "Farmers engaged in seasonal crop production",
                "rate_of_interest": "7.5% per annum",
                "image": "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
            },
            {
                "loan_name": "SBI Tractor Loan",
                "eligibility": "Farmers engaged in commercial farming",
                "rate_of_interest": "9% per annum",
                "image": "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
            }
        ],
        "Punjab National Bank": [
            {
                "loan_name": "PNB Kisan Credit Card",
                "eligibility": "Individual farmers, joint liability groups, self-help groups",
                "rate_of_interest": "7.5% per annum",
                "image": "https://cdn.freelogovectors.net/wp-content/uploads/2023/01/punjab-national-bank-logo-pnb-freelogovectors.net_.png"
            },
            {
                "loan_name": "PNB Dairy Loan",
                "eligibility": "Farmers involved in dairy farming",
                "rate_of_interest": "8.5% per annum",
                "image": "https://cdn.freelogovectors.net/wp-content/uploads/2023/01/punjab-national-bank-logo-pnb-freelogovectors.net_.png"
            }
        ],
        "ICICI Bank": [
            {
                "loan_name": "ICICI Kisan Credit Card",
                "eligibility": "Farmers with a minimum landholding of 2 acres",
                "rate_of_interest": "8% per annum",
                "image": "https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg"
            },
            {
                "loan_name": "ICICI Crop Loan",
                "eligibility": "Farmers engaged in seasonal crop production",
                "rate_of_interest": "7.75% per annum",
                "image": "https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg"
            },
            {
                "loan_name": "ICICI Tractor Loan",
                "eligibility": "Farmers with at least 5 acres of land",
                "rate_of_interest": "9.5% per annum",
                "image": "https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg"
            }
        ],
        "HDFC Bank": [
            {
                "loan_name": "HDFC Crop Loan",
                "eligibility": "Farmers owning agricultural land",
                "rate_of_interest": "7.25% per annum",
                "image": "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg"
            },
            {
                "loan_name": "HDFC Dairy Loan",
                "eligibility": "Entrepreneurs and dairy cooperatives",
                "rate_of_interest": "9% per annum",
                "image": "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg"
            }
        ],
        "Axis Bank": [
            {
                "loan_name": "Axis Bank Crop Loan",
                "eligibility": "Small and marginal farmers",
                "rate_of_interest": "7.75% per annum",
                "image": "https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png"
            }
        ]
    }
}

export const SchemesMain = () => {
    const [selectedLoanType, setSelectedLoanType] = useState('All')
    const [selectedBank, setSelectedBank] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('name')

    const loanTypes = ['All', ...Object.keys(bankLoanData.loans_by_type)]
    const banks = ['All', ...new Set(Object.values(bankLoanData.loans_by_type).flat().map(loan => loan.bank_name))]

    const allLoans = Object.values(bankLoanData.loans_by_type).flat()

    const filteredLoans = useMemo(() => {
        let result = allLoans.filter(loan => {
            const typeMatch = selectedLoanType === 'All' || 
                Object.keys(bankLoanData.loans_by_type).find(type => 
                    type === selectedLoanType && 
                    bankLoanData.loans_by_type[type].includes(loan)
                )
            
            const bankMatch = selectedBank === 'All' || loan.bank_name === selectedBank
            
            const searchMatch = loan.loan_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                loan.eligibility.toLowerCase().includes(searchTerm.toLowerCase())
            
            return typeMatch && bankMatch && searchMatch
        })

        return result.sort((a, b) => {
            switch(sortBy) {
                case 'interest_asc':
                    return parseFloat(a.rate_of_interest) - parseFloat(b.rate_of_interest)
                case 'interest_desc':
                    return parseFloat(b.rate_of_interest) - parseFloat(a.rate_of_interest)
                case 'bank':
                    return a.bank_name.localeCompare(b.bank_name)
                default:
                    return a.loan_name.localeCompare(b.loan_name)
            }
        })
    }, [selectedLoanType, selectedBank, searchTerm, sortBy])

    return (
        <div style={{padding:'30px'}} className="container mx-auto p-6 bg-green-50">
            <h1 style={{marginBottom:"20px"}} className="text-3xl font-bold text-center text-green-500 ">
                Agricultural Loan Finder
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <select 
                    style={{padding:"5px 5px"}}
                    value={selectedLoanType}
                    onChange={(e) => setSelectedLoanType(e.target.value)}
                    className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 "
                >
                    {loanTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>

                <select 
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="px-4 py-2 border rounded-md outline-none focus:ring-2 "
                >
                    {banks.map(bank => (
                        <option key={bank} value={bank}>{bank}</option>
                    ))}
                </select>

                <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border rounded-md outline-none focus:ring-2"
                >
                    <option value="name">Sort by Name</option>
                    <option value="bank">Sort by Bank</option>
                    <option value="interest_asc">Interest Rate (Low to High)</option>
                    <option value="interest_desc">Interest Rate (High to Low)</option>
                </select>

                <input 
                    style={{padding:"5px 5px"}}
                    type="text"
                    placeholder="Search loans..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full max-w-xs placeholder:text-[#191818] focus:outline-none outline-none focus:ring-2  font-semibold"
                />
            </div>

            <div style={{marginTop:'30px'}} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLoans.map((loan, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow flex"
                    >
                        <div className="w-1/4 flex items-center justify-center pr-4">
                            <img 
                                src={loan.image} 
                                alt={`${loan.bank_name} logo`} 
                                className="max-h-24 max-w-full object-contain"
                            />
                        </div>

                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold text-green-700 mb-2">
                                {loan.loan_name}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                <strong>Bank:</strong> {loan.bank_name}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Eligibility:</strong> {loan.eligibility}
                            </p>
                            <p className="text-green-600 font-bold">
                                Interest Rate: {loan.rate_of_interest}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredLoans.length === 0 && (
                <div className="text-center text-gray-500 mt-6">
                    No loans found matching your filter criteria.
                </div>
            )}

            <div className="text-center text-gray-600 mt-4">
                {filteredLoans.length} loan{filteredLoans.length !== 1 ? 's' : ''} found
            </div>
        </div>
    )
}