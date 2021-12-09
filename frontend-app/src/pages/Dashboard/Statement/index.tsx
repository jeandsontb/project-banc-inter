import { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import dayjs from 'dayjs';

import { transactions } from '../../../services/resources/pix';
import { 
  StatementContainer, 
  StatementItemContainer, 
  StatementItemImage, 
  StatementItemInfo 
} from "./styles";


interface StatementItem {
  user: {
    firstname: string,
    lastName: string,
  },
  value: number,
  type: 'paid' | 'received',
  updateAt: Date,
}

const StatementItemData = ({user, value, type, updateAt}: StatementItem) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type} >
        <FiDollarSign size={24} />
      </StatementItemImage>

      <StatementItemInfo>
        <p className="primary-color" >
          {value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </p>

        <p>
          {type === 'paid' ? 'Pago a ' : 'Recebido de '}
          <strong>{user.firstname} {user.lastName} </strong>
        </p>

        {/* <p>{format(new Date(updateAt), "dd/MM/yyyy 'às' HH:mm:'h'")}</p> */}
        <p>
          {dayjs(updateAt).format("DD/MM/YYYY")} às {dayjs(updateAt).format("HH:mm/YYYY")}
        </p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

const Statement = () => {

  const [statements, setStatements] = useState<StatementItem[]>([]);

  const getAllTransactions = async () => {
    const { data } = await transactions();
    setStatements(data.transactions);
  }

  useEffect(() => {
    getAllTransactions();
  }, [])

  // const statements: StatementItem[] = [
  //   {
  //     user: {
  //       firstName: 'Jeandson',
  //       lastName: 'Tenorio'
  //     },
  //     value: 250.00,
  //     type: 'pay',
  //     updateAt: new Date()
  //   },
  //   {
  //     user: {
  //       firstName: 'Kaio',
  //       lastName: 'Ryan'
  //     },
  //     value: 120.00,
  //     type: 'received',
  //     updateAt: new Date()
  //   }
  // ]

  return (
    <StatementContainer>
      {
        statements.length > 0 && statements.map(statement => <StatementItemData {...statement} />)
      }
    </StatementContainer>
  )
}

export default Statement;