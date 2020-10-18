import {TransactionTypesDto} from './TransactionTypesDto';
import {CustomerDto} from './Customer.dto';

export class TransactionDto{
  id: number;
  amount: number;
  customerDto: CustomerDto;
  description: string;
  createdAt: string;
  updateAt: string;
  transactionType: string;
  dniDestiny: string;
  transactionTypeDto: TransactionTypesDto;
  historicalBalance: number;
}
