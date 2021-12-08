import { format } from 'date-fns';
import { FiDollarSign } from 'react-icons/fi';

import { 
  StatementContainer, 
  StatementItemContainer, 
  StatementItemImage, 
  StatementItemInfo 
} from "./styles";


interface StatementItem {
  user: {
    firstName: string,
    lastName: string,
  },
  value: number,
  type: 'pay' | 'received',
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
          {type === 'pay' ? 'Pago a ' : 'Recebido de '}
          <strong>{user.firstName} {user.lastName} </strong>
        </p>

        <p>{format(updateAt, "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

const Statement = () => {

  const statements: StatementItem[] = [
    {
      user: {
        firstName: 'Jeandson',
        lastName: 'Tenorio'
      },
      value: 250.00,
      type: 'pay',
      updateAt: new Date()
    },
    {
      user: {
        firstName: 'Kaio',
        lastName: 'Ryan'
      },
      value: 120.00,
      type: 'received',
      updateAt: new Date()
    }
  ]

  return (
    <StatementContainer>
      {statements.map(statement => <StatementItemData {...statement} />)

      }
    </StatementContainer>
  )
}

export default Statement;