import PageContainer from '@/components/containers/PageContainer';
import React from 'react';
import { pricingPlans, tableData } from '@/libs/data';
import ActionButton from '@/components/buttons/ActionButton';
import PricingCard from '@/components/pricing/PricingCard';
import { FiCheck, FiX } from 'react-icons/fi';

export const metadata = {
	title: 'Pricing | Dutiful',
	description: 'Welcome to Dutiful webpage',
};
const Pricing = () => {
	return (
		<PageContainer>
			<section className='w-full px-8 py-7 text-center'>
				<h1 className='title'>Plans to Suit Your Business Budget</h1>
				<p className='subtitle mx-auto mt-2 max-w-3xl text-center text-gray-light'>
					Our fully organized plans deliver valuable content that showcases your
					services and skills, drives Lead, covers all features, and gives
					customers a clear idea to be able to choose your services.
				</p>
			</section>
			<section className='w-full bg-[#FCFAFF] p-5 py-10 md:p-10'>
				<div className='flex h-full flex-col items-stretch justify-between gap-3 md:flex-row'>
					{pricingPlans.map((plan) => (
						<PricingCard
							key={plan.title}
							title={plan.title}
							price={plan.price}
							benefits={plan.benefits}
						/>
					))}
				</div>
				<div className='mt-10 hidden md:block'>
					<h2 className='text-3xl font-medium text-black'>Features Overview</h2>
					<div className='relative mt-20 overflow-x-auto'>
						<table className='w-full text-left'>
							<thead className=''>
								<tr>
									<th
										scope='col'
										className='px-6 pt-12 text-xl font-normal text-gray-light'
									>
										Features & Services
									</th>
									<th
										scope='col'
										className='px-6 py-3'
									>
										Basic
										<ActionButton label='Get started' />
									</th>
									<th
										scope='col'
										className='px-6 py-3'
									>
										Standard
										<ActionButton label='Get started' />
									</th>
									<th
										scope='col'
										className='px-6 py-3'
									>
										Premuim
										<ActionButton label='Get started' />
									</th>
								</tr>
							</thead>

							<tbody>
								{tableData.map((data, index) => (
									<tr
										key={index}
										className={`${index % 2 === 0 ? 'bg-white' : null}`}
									>
										<td className='px-3 py-4 text-gray-light'>{data.title}</td>
										{data.plans.map((plan) => (
											<>
												<td className='px-3 py-4 text-center font-bold'>
													{typeof plan.basic !== 'boolean' ? (
														plan.basic
													) : plan.basic === true ? (
														<FiCheck className='mx-auto text-[#AC64CE]' />
													) : (
														<FiX className='mx-auto text-gray-light opacity-50' />
													)}
												</td>
												<td className='px-3 py-4 text-center font-bold'>
													{typeof plan.standard !== 'boolean' ? (
														plan.standard
													) : plan.standard === true ? (
														<FiCheck className='mx-auto text-[#AC64CE]' />
													) : (
														<FiX className='mx-auto text-gray-light opacity-50' />
													)}
												</td>
												<td className='px-3 py-4 text-center font-bold'>
													{typeof plan.premium !== 'boolean' ? (
														plan.premium
													) : plan.premium === true ? (
														<FiCheck className='mx-auto text-[#AC64CE]' />
													) : (
														<FiX className='mx-auto text-gray-light opacity-50' />
													)}
												</td>
											</>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</PageContainer>
	);
};

export default Pricing;
