import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  CheckboxGroup,
  Checkbox,
} from '@nextui-org/react'
import ButtonOne from './ButtonOne'

export default function CardOne() {
  return (
    <Card className="max-w-[300px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Data Filtering</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <CheckboxGroup label="Select cities" defaultValue={['buenos-aires', 'london']}>
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="w-full grid grid-cols-2 gap-2">
          <ButtonOne />
          <ButtonOne />
        </div>
      </CardFooter>
    </Card>
  )
}
