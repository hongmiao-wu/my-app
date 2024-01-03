import * as React from "react";
import { Slider } from "baseui/slider";
import { Input, SIZE } from "baseui/input";
import {Select, Value} from 'baseui/select';
import {Button} from 'baseui/button';
import {StatefulButtonGroup, MODE} from 'baseui/button-group';
import {useStyletron} from 'baseui'

export default function AdjustableParameters () {
  const [seedValue, setSeedValue] = React.useState([2024]);
  const [epochValue, setEpochValue] = React.useState([10]);
  const [batchValue, setBatchValue] = React.useState([128]);
  const [rateValue, setRateValue] = React.useState([0.01]);
  const [value, setValue] = React.useState(null); 
  const [css, theme] = useStyletron();
  const space = css({marginLeft: theme.sizing.scale1000});
  return (
    <div>
    {/* Seed */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginBottom: '2px' }}>
    <h4>Seed</h4> 
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
    <div style={{ flex: '7', paddingRight: '10px' }}>
      <Slider
        value={seedValue}
        onChange={({ value }) => setSeedValue(value)} 
        min={1}
        max={10000}
      />
    </div>
    <div style={{ flex: '3' }}> 
      <Input
        value={seedValue[0]} // Assign the first element of the array as the value
        onChange={e => setSeedValue([parseInt(e.target.value, 10)])} // Convert the string value to an integer and wrap in an array
        size={SIZE.compact}
        type="number"
        clearOnEscape
      />
    </div>
    </div>
    </div>
    
    {/* Epochs */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginBottom: '2px' }}>
    <h4>Epochs</h4> 
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
    <div style={{ flex: '7', paddingRight: '10px' }}>
      <Slider
        value={epochValue}
        onChange={({ value }) => setEpochValue(value)} 
        min={5}
        max={20}
      />
    </div>
    <div style={{ flex: '3' }}> 
      <Input
        value={epochValue[0]} // Assign the first element of the array as the value
        onChange={e => setEpochValue([parseInt(e.target.value, 10)])} // Convert the string value to an integer and wrap in an array
        size={SIZE.compact}
        type="number"
        clearOnEscape
      />
    </div>
    </div>
    </div>

    {/* Batch Size */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginBottom: '2px' }}>
    <h4>Batch Size</h4> 
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
    <div style={{ flex: '7', paddingRight: '10px' }}>
      <Slider
        value={batchValue}
        onChange={({ value }) => setBatchValue(value)} 
        min={32}
        max={256}
        step={32}
      />
    </div>
    <div style={{ flex: '3' }}> 
      <Input
        value={batchValue[0]} // Assign the first element of the array as the value
        onChange={e => setBatchValue([parseInt(e.target.value, 10)])} // Convert the string value to an integer and wrap in an array
        size={SIZE.compact}
        type="number"
        clearOnEscape
      />
    </div>
    </div>
    </div>

    {/* Learning Rate */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginBottom: '2px' }}>
    <h4>Learning Rate</h4> 
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
    <div style={{ flex: '7', paddingRight: '10px' }}>
      <Slider
        value={rateValue}
        onChange={({ value }) => setRateValue(value)} 
        min={0.01}
        max={1}
        step={.1}
      />
    </div>
    <div style={{ flex: '3' }}> 
      <Input
        value={rateValue[0]} 
        onChange={e => setRateValue([parseFloat(e.target.value, 10)])} // Convert the string value to an integer and wrap in an array
        size={SIZE.compact}
        type="number"
        clearOnEscape
      />
    </div>
    </div>
    </div>
    
    {/* Loss Function */}
    <div>
    <h4>Loss Function</h4> 
    <Select
      options={[
        {id: 'MEAN SQUARE ERROR', lossFunction: 'MSE'},
        {id: 'MEAN ABSOLUTE ERROR', lossFunction: 'MAE'},
      ]}
      labelKey="id"
      valueKey="lossFunction"
      onChange={({value}) => setValue(value)}
      value={value}
    />
    </div>

    {/* Start/Stop/Resume Buttons */}
    <div
        style={{
          height: '160px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <StatefulButtonGroup
      mode={MODE.checkbox}
      initialState={{selected: []}}
        >
      <Button>Start</Button>
      <span className={space} />
      <Button>Stop</Button>
      <span className={space} />
      <Button>Resume</Button>
      <span className={space} />
        </StatefulButtonGroup>
      </div>
    
  </div>
  );
}