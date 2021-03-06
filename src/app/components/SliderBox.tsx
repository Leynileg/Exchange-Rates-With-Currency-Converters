import * as React from 'react'
import { CurrencyProps } from '../App'

const SliderBox: React.StatelessComponent<CurrencyProps> = ({
  label,
  value,
}) => <div className="item">{`${label}: ${value}`}</div>

export default SliderBox
